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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var extend_1 = __importDefault(require("extend"));
var operationsClient = __importStar(require("./operations_client"));
var routingHeader = __importStar(require("./routing_header"));
exports.routingHeader = routingHeader;
var gax_1 = require("./gax");
exports.constructSettings = gax_1.constructSettings;
var streaming_1 = require("./streaming");
exports.StreamType = streaming_1.StreamType;
exports.StreamDescriptor = streaming_1.StreamDescriptor;
var longrunning_1 = require("./longrunning");
exports.LongrunningDescriptor = longrunning_1.LongrunningDescriptor;
exports.operation = longrunning_1.operation;
var bundling_1 = require("./bundling");
exports.BundleDescriptor = bundling_1.BundleDescriptor;
exports.BundleExecutor = bundling_1.BundleExecutor;
var path_template_1 = require("./path_template");
exports.PathTemplate = path_template_1.PathTemplate;
var paged_iteration_1 = require("./paged_iteration");
exports.PageDescriptor = paged_iteration_1.PageDescriptor;
var api_callable_1 = require("./api_callable");
exports.createApiCall = api_callable_1.createApiCall;
var grpc_1 = require("./grpc");
exports.GrpcClient = grpc_1.GrpcClient;
exports.GoogleProtoFilesRoot = grpc_1.GoogleProtoFilesRoot;
var grpc_2 = require("./grpc");
function lro(options) {
    options = extend_1.default({
        // tslint:disable-next-line no-any
        scopes: lro.ALL_SCOPES,
    }, options);
    var gaxGrpc = new grpc_2.GrpcClient(options);
    return new operationsClient.OperationsClientBuilder(gaxGrpc);
}
exports.lro = lro;
// tslint:disable-next-line no-any
lro.SERVICE_ADDRESS = operationsClient.SERVICE_ADDRESS;
// tslint:disable-next-line no-any
lro.ALL_SCOPES = operationsClient.ALL_SCOPES;
exports.createByteLengthFunction = grpc_2.GrpcClient.createByteLengthFunction;
exports.version = require('../../package.json').version;
//# sourceMappingURL=index.js.map