/*
 * Copyright 2016, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
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
 *
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var globby = __importStar(require("globby"));
var path = __importStar(require("path"));
var protobuf = __importStar(require("protobufjs"));
var google_auth_library_1 = require("google-auth-library");
var gax = __importStar(require("./gax"));
var googleProtoFilesDir = require('google-proto-files')('..');
googleProtoFilesDir = path.normalize(googleProtoFilesDir);
var COMMON_PROTO_DIRS = [
    // This list of directories is defined here:
    // https://github.com/googleapis/googleapis/blob/master/gapic/packaging/common_protos.yaml
    'api',
    path.join('iam', 'v1'),
    path.join('logging', 'type'),
    'longrunning',
    'protobuf',
    'rpc',
    'type',
];
var COMMON_PROTO_GLOB_PATTERNS = COMMON_PROTO_DIRS.map(function (dir) {
    return path.join(googleProtoFilesDir, 'google', dir, '**', '*.proto');
});
var COMMON_PROTO_FILES = globby.sync(COMMON_PROTO_GLOB_PATTERNS)
    .map(function (filename) {
    return path.normalize(filename);
})
    .map(function (filename) {
    return filename.substring(googleProtoFilesDir.length + 1);
});
var GrpcClient = /** @class */ (function () {
    /**
     * A class which keeps the context of gRPC and auth for the gRPC.
     *
     * @param {Object=} options - The optional parameters. It will be directly
     *   passed to google-auth-library library, so parameters like keyFile or
     *   credentials will be valid.
     * @param {Object=} options.auth - An instance of google-auth-library.
     *   When specified, this auth instance will be used instead of creating
     *   a new one.
     * @param {Object=} options.grpc - When specified, this will be used
     *   for the 'grpc' module in this context. By default, it will load the grpc
     *   module in the standard way.
     * @param {Function=} options.promise - A constructor for a promise that
     * implements the ES6 specification of promise. If not provided, native
     * promises will be used.
     * @constructor
     */
    function GrpcClient(options) {
        // if (!(this instanceof GrpcClient)) {
        //   return new GrpcClient(options);
        // }
        options = options || {};
        this.auth = options.auth || new google_auth_library_1.GoogleAuth(options);
        this.promise = options.promise || Promise;
        if ('grpc' in options) {
            this.grpc = options.grpc;
            this.grpcVersion = '';
        }
        else {
            this.grpc = require('grpc');
            this.grpcVersion = require('grpc/package.json').version;
        }
    }
    /**
     * Creates a gRPC credentials. It asks the auth data if necessary.
     * @private
     * @param {Object} opts - options values for configuring credentials.
     * @param {Object=} opts.sslCreds - when specified, this is used instead
     *   of default channel credentials.
     * @return {Promise} The promise which will be resolved to the gRPC credential.
     */
    GrpcClient.prototype._getCredentials = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var grpc, sslCreds, client, credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (opts.sslCreds) {
                            return [2 /*return*/, opts.sslCreds];
                        }
                        grpc = this.grpc;
                        sslCreds = grpc.credentials.createSsl();
                        return [4 /*yield*/, this.auth.getClient()];
                    case 1:
                        client = _a.sent();
                        credentials = grpc.credentials.combineChannelCredentials(sslCreds, grpc.credentials.createFromGoogleCredential(client));
                        return [2 /*return*/, credentials];
                }
            });
        });
    };
    /**
     * Load grpc proto services with the specific arguments.
     * @param {Array=} args - The argument list to be passed to grpc.load().
     * @return {Object} The gRPC loaded result (the toplevel namespace object).
     */
    GrpcClient.prototype.load = function (args) {
        if (!args) {
            args = [];
        }
        else if (!Array.isArray(args)) {
            args = [args];
        }
        if (args.length === 1) {
            args.push('proto', { convertFieldsToCamelCase: true });
        }
        return this.grpc.load.apply(this.grpc, args);
    };
    /**
     * Load grpc proto service from a filename hooking in googleapis common protos
     * when necessary.
     * @param {String} protoPath - The directory to search for the protofile.
     * @param {String} filename - The filename of the proto to be loaded.
     * @return {Object<string, *>} The gRPC loaded result (the toplevel namespace
     *   object).
     */
    GrpcClient.prototype.loadProto = function (protoPath, filename) {
        var resolvedPath = GrpcClient._resolveFile(protoPath, filename);
        return this.grpc.loadObject(protobuf.loadSync(resolvedPath, new GoogleProtoFilesRoot()));
    };
    GrpcClient._resolveFile = function (protoPath, filename) {
        if (fs.existsSync(path.join(protoPath, filename))) {
            return path.join(protoPath, filename);
        }
        else if (COMMON_PROTO_FILES.indexOf(filename) > -1) {
            return path.join(googleProtoFilesDir, filename);
        }
        throw new Error(filename + ' could not be found in ' + protoPath);
    };
    GrpcClient.prototype.metadataBuilder = function (headers) {
        var Metadata = this.grpc.Metadata;
        var baseMetadata = new Metadata();
        // tslint:disable-next-line forin
        for (var key in headers) {
            baseMetadata.set(key, headers[key]);
        }
        return function buildMetadata(abTests, moreHeaders) {
            // TODO: bring the A/B testing info into the metadata.
            var copied = false;
            var metadata = baseMetadata;
            for (var key in moreHeaders) {
                if (key.toLowerCase() !== 'x-goog-api-client' &&
                    moreHeaders.hasOwnProperty(key)) {
                    if (!copied) {
                        copied = true;
                        metadata = metadata.clone();
                    }
                    metadata.set(key, moreHeaders[key]);
                }
            }
            return metadata;
        };
    };
    /**
     * A wrapper of {@link constructSettings} function under the gRPC context.
     *
     * Most of parameters are common among constructSettings, please take a look.
     * @param {string} serviceName - The fullly-qualified name of the service.
     * @param {Object} clientConfig - A dictionary of the client config.
     * @param {Object} configOverrides - A dictionary of overriding configs.
     * @param {Object} headers - A dictionary of additional HTTP header name to
     *   its value.
     * @return {Object} A mapping of method names to CallSettings.
     */
    GrpcClient.prototype.constructSettings = function (serviceName, clientConfig, configOverrides, headers) {
        return gax.constructSettings(serviceName, clientConfig, configOverrides, this.grpc.status, { metadataBuilder: this.metadataBuilder(headers) }, this.promise);
    };
    /**
     * Creates a gRPC stub with current gRPC and auth.
     * @param {function} CreateStub - The constructor function of the stub.
     * @param {Object} options - The optional arguments to customize
     *   gRPC connection. This options will be passed to the constructor of
     *   gRPC client too.
     * @param {string} options.servicePath - The name of the server of the service.
     * @param {number} options.port - The port of the service.
     * @param {grpc.ClientCredentials=} options.sslCreds - The credentials to be used
     *   to set up gRPC connection.
     * @return {Promise} A promse which resolves to a gRPC stub instance.
     */
    // tslint:disable-next-line variable-name
    GrpcClient.prototype.createStub = function (CreateStub, options) {
        var serviceAddress = options.servicePath + ':' + options.port;
        return this._getCredentials(options).then(function (credentials) {
            var grpcOptions = {};
            Object.keys(options).forEach(function (key) {
                if (key.indexOf('grpc.') === 0) {
                    grpcOptions[key] = options[key];
                }
            });
            return new CreateStub(serviceAddress, credentials, grpcOptions);
        });
    };
    /**
     * Creates a 'bytelength' function for a given proto message class.
     *
     * See {@link BundleDescriptor} about the meaning of the return value.
     *
     * @param {function} message - a constructor function that is generated by
     *   protobuf.js. Assumes 'encoder' field in the message.
     * @return {function(Object):number} - a function to compute the byte length
     *   for an object.
     */
    GrpcClient.createByteLengthFunction = function (message) {
        return function getByteLength(obj) {
            return message.encode(obj).finish().length;
        };
    };
    return GrpcClient;
}());
exports.GrpcClient = GrpcClient;
var GoogleProtoFilesRoot = /** @class */ (function (_super) {
    __extends(GoogleProtoFilesRoot, _super);
    function GoogleProtoFilesRoot() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    // Causes the loading of an included proto to check if it is a common
    // proto. If it is a common proto, use the google-proto-files proto.
    GoogleProtoFilesRoot.prototype.resolvePath = function (originPath, includePath) {
        originPath = path.normalize(originPath);
        includePath = path.normalize(includePath);
        // Fully qualified paths don't need to be resolved.
        if (path.isAbsolute(includePath)) {
            if (!fs.existsSync(includePath)) {
                throw new Error('The include `' + includePath + '` was not found.');
            }
            return includePath;
        }
        if (COMMON_PROTO_FILES.indexOf(includePath) > -1) {
            return path.join(googleProtoFilesDir, includePath);
        }
        return GoogleProtoFilesRoot._findIncludePath(originPath, includePath);
    };
    GoogleProtoFilesRoot._findIncludePath = function (originPath, includePath) {
        originPath = path.normalize(originPath);
        includePath = path.normalize(includePath);
        var current = originPath;
        var found = fs.existsSync(path.join(current, includePath));
        while (!found && current.length > 0) {
            current = current.substring(0, current.lastIndexOf(path.sep));
            found = fs.existsSync(path.join(current, includePath));
        }
        if (!found) {
            throw new Error('The include `' + includePath + '` was not found.');
        }
        return path.join(current, includePath);
    };
    return GoogleProtoFilesRoot;
}(protobuf.Root));
exports.GoogleProtoFilesRoot = GoogleProtoFilesRoot;
//# sourceMappingURL=grpc.js.map