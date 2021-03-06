/// <reference types="node" />
import Duplexify from 'duplexify';
import { Stream, Duplex } from 'stream';
import { APICallback, APICall } from './api_callable';
/**
 * The type of gRPC streaming.
 * @enum {number}
 */
export declare enum StreamType {
    /** Client sends a single request, server streams responses. */
    SERVER_STREAMING = 1,
    /** Client streams requests, server returns a single response. */
    CLIENT_STREAMING = 2,
    /** Both client and server stream objects. */
    BIDI_STREAMING = 3
}
export declare class StreamProxy extends Duplexify {
    type: {};
    private _callback?;
    private _isCancelCalled;
    stream?: Duplex & {
        cancel: () => void;
    };
    /**
     * StreamProxy is a proxy to gRPC-streaming method.
     *
     * @private
     * @constructor
     * @param {StreamType} type - the type of gRPC stream.
     * @param {ApiCallback} callback - the callback for further API call.
     */
    constructor(type: StreamType, callback: APICallback);
    cancel(): void;
    /**
     * Forward events from an API request stream to the user's stream.
     * @param {Stream} stream - The API request stream.
     */
    forwardEvents(stream: Stream): void;
    /**
     * Specifies the target stream.
     * @param {ApiCall} apiCall - the API function to be called.
     * @param {Object} argument - the argument to be passed to the apiCall.
     */
    setStream(apiCall: APICall, argument: {}): void;
}
export declare class GrpcStreamable {
    descriptor: StreamDescriptor;
    /**
     * An API caller for methods of gRPC streaming.
     * @private
     * @constructor
     * @param {StreamDescriptor} descriptor - the descriptor of the method structure.
     */
    constructor(descriptor: StreamDescriptor);
    init(settings: {}, callback: APICallback): StreamProxy;
    wrap(func: Function): Function;
    call(apiCall: APICall, argument: {}, settings: {}, stream: StreamProxy): void;
    fail(stream: Stream, err: Error): void;
    result(stream: Stream): Stream;
}
export declare class StreamDescriptor {
    type: StreamType;
    /**
     * Describes the structure of gRPC streaming call.
     * @constructor
     * @param {StreamType} streamType - the type of streaming.
     */
    constructor(streamType: StreamType);
    apiCaller(settings: {
        retry: null;
    }): GrpcStreamable;
}
