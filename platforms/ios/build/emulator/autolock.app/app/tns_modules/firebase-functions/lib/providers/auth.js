"use strict";
// The MIT License (MIT)
//
// Copyright (c) 2017 Firebase
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
Object.defineProperty(exports, "__esModule", { value: true });
const cloud_functions_1 = require("../cloud-functions");
const _ = require("lodash");
/** @internal */
exports.provider = 'google.firebase.auth';
/** @internal */
exports.service = 'firebaseauth.googleapis.com';
/** Handle events in the Firebase Auth user lifecycle. */
function user() {
    return new UserBuilder(() => {
        if (!process.env.GCLOUD_PROJECT) {
            throw new Error('process.env.GCLOUD_PROJECT is not set.');
        }
        return 'projects/' + process.env.GCLOUD_PROJECT;
    });
}
exports.user = user;
class UserRecordMetadata {
    constructor(creationTime, lastSignInTime) {
        this.creationTime = creationTime;
        this.lastSignInTime = lastSignInTime;
    }
    ;
    /** Returns a plain JavaScript object with the properties of UserRecordMetadata. */
    toJSON() {
        return {
            creationTime: this.creationTime,
            lastSignInTime: this.lastSignInTime,
        };
    }
}
exports.UserRecordMetadata = UserRecordMetadata;
/** Builder used to create Cloud Functions for Firebase Auth user lifecycle events. */
class UserBuilder {
    /** @internal */
    constructor(triggerResource) {
        this.triggerResource = triggerResource;
    }
    static dataConstructor(raw) {
        return userRecordConstructor(raw.data);
    }
    /** Respond to the creation of a Firebase Auth user. */
    onCreate(handler) {
        return this.onOperation(handler, 'user.create');
    }
    /** Respond to the deletion of a Firebase Auth user. */
    onDelete(handler) {
        return this.onOperation(handler, 'user.delete');
    }
    onOperation(handler, eventType) {
        return cloud_functions_1.makeCloudFunction({
            handler,
            provider: exports.provider,
            eventType,
            service: exports.service,
            triggerResource: this.triggerResource,
            dataConstructor: UserBuilder.dataConstructor,
            legacyEventType: `providers/firebase.auth/eventTypes/${eventType}`,
        });
    }
}
exports.UserBuilder = UserBuilder;
function userRecordConstructor(wireData) {
    // Falsey values from the wire format proto get lost when converted to JSON, this adds them back.
    let falseyValues = {
        email: null,
        emailVerified: false,
        displayName: null,
        photoURL: null,
        phoneNumber: null,
        disabled: false,
        providerData: [],
        customClaims: {},
        passwordSalt: null,
        passwordHash: null,
        tokensValidAfterTime: null,
    };
    let record = _.assign({}, falseyValues, wireData);
    let meta = _.get(record, 'metadata');
    if (meta) {
        _.set(record, 'metadata', new UserRecordMetadata(
        // Transform payload to firebase-admin v5.0.0 format because wire format is different (BUG 63167395)
        meta.createdAt || meta.creationTime, meta.lastSignedInAt || meta.lastSignInTime));
    }
    else {
        _.set(record, 'metadata', new UserRecordMetadata(null, null));
    }
    _.forEach(record.providerData, entry => {
        _.set(entry, 'toJSON', () => {
            return entry;
        });
    });
    _.set(record, 'toJSON', () => {
        const json = _.pick(record, ['uid', 'email', 'emailVerified', 'displayName',
            'photoURL', 'phoneNumber', 'disabled', 'passwordHash', 'passwordSalt', 'tokensValidAfterTime']);
        json.metadata = _.get(record, 'metadata').toJSON();
        json.customClaims = _.cloneDeep(record.customClaims);
        json.providerData = _.map(record.providerData, entry => entry.toJSON());
        return json;
    });
    return record;
}
exports.userRecordConstructor = userRecordConstructor;
