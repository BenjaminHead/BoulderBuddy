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
import * as operationsClient from './operations_client';
import * as routingHeader from './routing_header';
export { routingHeader };
export { constructSettings } from './gax';
export { StreamType, StreamDescriptor } from './streaming';
export { LongrunningDescriptor, operation } from './longrunning';
export { BundleDescriptor, BundleExecutor } from './bundling';
export { PathTemplate } from './path_template';
export { PageDescriptor } from './paged_iteration';
export { createApiCall } from './api_callable';
export { GrpcClient, GrpcClientOptions, GrpcModule, GoogleProtoFilesRoot, Metadata, MetadataValue, Stub, StubOptions } from './grpc';
import { GrpcClient, GrpcClientOptions } from './grpc';
declare function lro(options: GrpcClientOptions): operationsClient.OperationsClientBuilder;
export { lro };
export declare const createByteLengthFunction: typeof GrpcClient.createByteLengthFunction;
export declare const version: any;