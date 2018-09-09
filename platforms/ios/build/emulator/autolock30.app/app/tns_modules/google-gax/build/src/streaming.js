/**
 * Copyright 2016, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* This file describes the gRPC-streaming. */
var duplexify_1 = __importDefault(require("duplexify"));
var retryRequest = require('retry-request');
/**
 * The type of gRPC streaming.
 * @enum {number}
 */
var StreamType;
(function (StreamType) {
    /** Client sends a single request, server streams responses. */
    StreamType[StreamType["SERVER_STREAMING"] = 1] = "SERVER_STREAMING";
    /** Client streams requests, server returns a single response. */
    StreamType[StreamType["CLIENT_STREAMING"] = 2] = "CLIENT_STREAMING";
    /** Both client and server stream objects. */
    StreamType[StreamType["BIDI_STREAMING"] = 3] = "BIDI_STREAMING";
})(StreamType = exports.StreamType || (exports.StreamType = {}));
var StreamProxy = /** @class */ (function (_super) {
    __extends(StreamProxy, _super);
    /**
     * StreamProxy is a proxy to gRPC-streaming method.
     *
     * @private
     * @constructor
     * @param {StreamType} type - the type of gRPC stream.
     * @param {ApiCallback} callback - the callback for further API call.
     */
    function StreamProxy(type, callback) {
        var _this = _super.call(this, undefined, undefined, {
            objectMode: true,
            readable: type !== StreamType.CLIENT_STREAMING,
            writable: type !== StreamType.SERVER_STREAMING,
        }) || this;
        _this.type = type;
        _this._callback = callback;
        _this._isCancelCalled = false;
        return _this;
    }
    StreamProxy.prototype.cancel = function () {
        if (this.stream) {
            this.stream.cancel();
        }
        else {
            this._isCancelCalled = true;
        }
    };
    /**
     * Forward events from an API request stream to the user's stream.
     * @param {Stream} stream - The API request stream.
     */
    StreamProxy.prototype.forwardEvents = function (stream) {
        var _this = this;
        var eventsToForward = ['metadata', 'response', 'status'];
        eventsToForward.forEach(function (event) {
            stream.on(event, _this.emit.bind(_this, event));
        });
        // We also want to supply the status data as 'response' event to support
        // the behavior of google-cloud-node expects.
        // see:
        // https://github.com/GoogleCloudPlatform/google-cloud-node/pull/1775#issuecomment-259141029
        // https://github.com/GoogleCloudPlatform/google-cloud-node/blob/116436fa789d8b0f7fc5100b19b424e3ec63e6bf/packages/common/src/grpc-service.js#L355
        stream.on('metadata', function (metadata) {
            // Create a response object with succeeds.
            // TODO: unify this logic with the decoration of gRPC response when it's
            // added. see: https://github.com/googleapis/gax-nodejs/issues/65
            stream.emit('response', {
                code: 200,
                details: '',
                message: 'OK',
                metadata: metadata,
            });
        });
    };
    /**
     * Specifies the target stream.
     * @param {ApiCall} apiCall - the API function to be called.
     * @param {Object} argument - the argument to be passed to the apiCall.
     */
    StreamProxy.prototype.setStream = function (apiCall, argument) {
        var _this = this;
        if (this.type === StreamType.SERVER_STREAMING) {
            var retryStream = retryRequest(null, {
                objectMode: true,
                request: function () {
                    if (_this._isCancelCalled) {
                        if (_this.stream) {
                            _this.stream.cancel();
                        }
                        return;
                    }
                    var stream = apiCall(argument, _this._callback);
                    _this.stream = stream;
                    _this.forwardEvents(stream);
                    return stream;
                },
            });
            this.setReadable(retryStream);
            return;
        }
        var stream = apiCall(argument, this._callback);
        this.stream = stream;
        this.forwardEvents(stream);
        if (this.type === StreamType.CLIENT_STREAMING) {
            this.setWritable(stream);
        }
        if (this.type === StreamType.BIDI_STREAMING) {
            this.setReadable(stream);
            this.setWritable(stream);
        }
        if (this._isCancelCalled && this.stream) {
            this.stream.cancel();
        }
    };
    return StreamProxy;
}(duplexify_1.default));
exports.StreamProxy = StreamProxy;
var GrpcStreamable = /** @class */ (function () {
    /**
     * An API caller for methods of gRPC streaming.
     * @private
     * @constructor
     * @param {StreamDescriptor} descriptor - the descriptor of the method structure.
     */
    function GrpcStreamable(descriptor) {
        this.descriptor = descriptor;
    }
    GrpcStreamable.prototype.init = function (settings, callback) {
        return new StreamProxy(this.descriptor.type, callback);
    };
    GrpcStreamable.prototype.wrap = function (func) {
        switch (this.descriptor.type) {
            case StreamType.SERVER_STREAMING:
                return function (argument, metadata, options) {
                    return func(argument, metadata, options);
                };
            case StreamType.CLIENT_STREAMING:
                return function (argument, metadata, options, callback) {
                    return func(metadata, options, callback);
                };
            case StreamType.BIDI_STREAMING:
                return function (argument, metadata, options) {
                    return func(metadata, options);
                };
            default:
                console.error('Unknown stream type', this.descriptor.type);
        }
        return func;
    };
    GrpcStreamable.prototype.call = function (apiCall, argument, settings, stream) {
        stream.setStream(apiCall, argument);
    };
    GrpcStreamable.prototype.fail = function (stream, err) {
        stream.emit('error', err);
    };
    GrpcStreamable.prototype.result = function (stream) {
        return stream;
    };
    return GrpcStreamable;
}());
exports.GrpcStreamable = GrpcStreamable;
var StreamDescriptor = /** @class */ (function () {
    /**
     * Describes the structure of gRPC streaming call.
     * @constructor
     * @param {StreamType} streamType - the type of streaming.
     */
    function StreamDescriptor(streamType) {
        this.type = streamType;
    }
    StreamDescriptor.prototype.apiCaller = function (settings) {
        // Right now retrying does not work with gRPC-streaming, because retryable
        // assumes an API call returns an event emitter while gRPC-streaming methods
        // return Stream.
        // TODO: support retrying.
        settings.retry = null;
        return new GrpcStreamable(this);
    };
    return StreamDescriptor;
}());
exports.StreamDescriptor = StreamDescriptor;
//# sourceMappingURL=streaming.js.map