/// <reference types="node" />
import * as protobuf from 'protobufjs';
import { GoogleAuth, GoogleAuthOptions } from 'google-auth-library';
import * as gax from './gax';
import { IncomingHttpHeaders } from 'http';
export interface GrpcClientOptions extends GoogleAuthOptions {
    auth: GoogleAuth;
    promise?: PromiseConstructor;
    grpc?: GrpcModule;
}
export interface MetadataValue {
    equals: Function;
}
export interface Metadata {
    new (): Metadata;
    set: (key: {}, value?: {} | null) => void;
    clone: () => Metadata;
    value: MetadataValue;
    get: (key: {}) => {};
}
export interface GrpcModule {
    credentials: {
        createSsl(): void;
        combineChannelCredentials: Function;
        createFromGoogleCredential: Function;
    };
    load: Function;
    loadObject: Function;
    Metadata: Metadata;
    status: {
        [index: string]: number;
    };
}
export interface StubOptions {
    [index: string]: {};
    servicePath: string;
    port: number;
    sslCreds: {};
}
export interface Stub {
    new (serviceAddress: string, credentials: {}, grpcOptions: {}): Stub;
}
export declare class GrpcClient {
    auth: GoogleAuth;
    promise: PromiseConstructor;
    grpc: GrpcModule;
    grpcVersion: string;
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
    constructor(options: GrpcClientOptions);
    /**
     * Creates a gRPC credentials. It asks the auth data if necessary.
     * @private
     * @param {Object} opts - options values for configuring credentials.
     * @param {Object=} opts.sslCreds - when specified, this is used instead
     *   of default channel credentials.
     * @return {Promise} The promise which will be resolved to the gRPC credential.
     */
    _getCredentials(opts: StubOptions): Promise<any>;
    /**
     * Load grpc proto services with the specific arguments.
     * @param {Array=} args - The argument list to be passed to grpc.load().
     * @return {Object} The gRPC loaded result (the toplevel namespace object).
     */
    load(args: Array<{}>): any;
    /**
     * Load grpc proto service from a filename hooking in googleapis common protos
     * when necessary.
     * @param {String} protoPath - The directory to search for the protofile.
     * @param {String} filename - The filename of the proto to be loaded.
     * @return {Object<string, *>} The gRPC loaded result (the toplevel namespace
     *   object).
     */
    loadProto(protoPath: string, filename: string): any;
    static _resolveFile(protoPath: string, filename: string): string;
    metadataBuilder(headers: IncomingHttpHeaders): (abTests?: {} | undefined, moreHeaders?: IncomingHttpHeaders | undefined) => Metadata;
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
    constructSettings(serviceName: string, clientConfig: gax.ClientConfig, configOverrides: gax.ClientConfig, headers: IncomingHttpHeaders): any;
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
    createStub(CreateStub: Stub, options: StubOptions): Promise<Stub>;
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
    static createByteLengthFunction(message: {
        encode: (obj: {}) => {
            finish: () => Array<{}>;
        };
    }): (obj: {}) => number;
}
export declare class GoogleProtoFilesRoot extends protobuf.Root {
    constructor(...args: Array<{}>);
    resolvePath(originPath: string, includePath: string): string;
    static _findIncludePath(originPath: string, includePath: string): string;
}
