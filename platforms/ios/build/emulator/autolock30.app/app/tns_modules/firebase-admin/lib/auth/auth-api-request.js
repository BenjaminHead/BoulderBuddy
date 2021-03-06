/*! firebase-admin v5.13.0 */
"use strict";
/*!
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("../utils/validator");
var deep_copy_1 = require("../utils/deep-copy");
var error_1 = require("../utils/error");
var api_request_1 = require("../utils/api-request");
var user_import_builder_1 = require("./user-import-builder");
/** Firebase Auth backend host. */
var FIREBASE_AUTH_HOST = 'www.googleapis.com';
/** Firebase Auth backend port number. */
var FIREBASE_AUTH_PORT = 443;
/** Firebase Auth backend path. */
var FIREBASE_AUTH_PATH = '/identitytoolkit/v3/relyingparty/';
/** Firebase Auth request header. */
var FIREBASE_AUTH_HEADER = {
    'Content-Type': 'application/json',
    'X-Client-Version': 'Node/Admin/5.13.0',
};
/** Firebase Auth request timeout duration in milliseconds. */
var FIREBASE_AUTH_TIMEOUT = 10000;
/** List of reserved claims which cannot be provided when creating a custom token. */
exports.RESERVED_CLAIMS = [
    'acr', 'amr', 'at_hash', 'aud', 'auth_time', 'azp', 'cnf', 'c_hash', 'exp', 'iat',
    'iss', 'jti', 'nbf', 'nonce', 'sub', 'firebase',
];
/** Maximum allowed number of characters in the custom claims payload. */
var MAX_CLAIMS_PAYLOAD_SIZE = 1000;
/** Maximum allowed number of users to batch download at one time. */
var MAX_DOWNLOAD_ACCOUNT_PAGE_SIZE = 1000;
/** Maximum allowed number of users to batch upload at one time. */
var MAX_UPLOAD_ACCOUNT_BATCH_SIZE = 1000;
/** Minimum allowed session cookie duration in seconds (5 minutes). */
var MIN_SESSION_COOKIE_DURATION_SECS = 5 * 60;
/** Maximum allowed session cookie duration in seconds (2 weeks). */
var MAX_SESSION_COOKIE_DURATION_SECS = 14 * 24 * 60 * 60;
/**
 * Validates a providerUserInfo object. All unsupported parameters
 * are removed from the original request. If an invalid field is passed
 * an error is thrown.
 *
 * @param {any} request The providerUserInfo request object.
 */
function validateProviderUserInfo(request) {
    var validKeys = {
        rawId: true,
        providerId: true,
        email: true,
        displayName: true,
        photoUrl: true,
    };
    // Remove invalid keys from original request.
    for (var key in request) {
        if (!(key in validKeys)) {
            delete request[key];
        }
    }
    if (!validator.isNonEmptyString(request.providerId)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_ID);
    }
    if (typeof request.displayName !== 'undefined' &&
        typeof request.displayName !== 'string') {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISPLAY_NAME, "The provider \"displayName\" for \"" + request.providerId + "\" must be a valid string.");
    }
    if (!validator.isNonEmptyString(request.rawId)) {
        // This is called localId on the backend but the developer specifies this as
        // uid externally. So the error message should use the client facing name.
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID, "The provider \"uid\" for \"" + request.providerId + "\" must be a valid non-empty string.");
    }
    // email should be a string and a valid email.
    if (typeof request.email !== 'undefined' && !validator.isEmail(request.email)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL, "The provider \"email\" for \"" + request.providerId + "\" must be a valid email string.");
    }
    // photoUrl should be a URL.
    if (typeof request.photoUrl !== 'undefined' &&
        !validator.isURL(request.photoUrl)) {
        // This is called photoUrl on the backend but the developer specifies this as
        // photoURL externally. So the error message should use the client facing name.
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHOTO_URL, "The provider \"photoURL\" for \"" + request.providerId + "\" must be a valid URL string.");
    }
}
/**
 * Validates a create/edit request object. All unsupported parameters
 * are removed from the original request. If an invalid field is passed
 * an error is thrown.
 *
 * @param {any} request The create/edit request object.
 * @param {boolean=} uploadAccountRequest Whether to validate as an uploadAccount request.
 */
function validateCreateEditRequest(request, uploadAccountRequest) {
    if (uploadAccountRequest === void 0) { uploadAccountRequest = false; }
    // Hash set of whitelisted parameters.
    var validKeys = {
        displayName: true,
        localId: true,
        email: true,
        password: true,
        rawPassword: true,
        emailVerified: true,
        photoUrl: true,
        disabled: true,
        disableUser: true,
        deleteAttribute: true,
        deleteProvider: true,
        sanityCheck: true,
        phoneNumber: true,
        customAttributes: true,
        validSince: true,
        passwordHash: uploadAccountRequest,
        salt: uploadAccountRequest,
        createdAt: uploadAccountRequest,
        lastLoginAt: uploadAccountRequest,
        providerUserInfo: uploadAccountRequest,
    };
    // Remove invalid keys from original request.
    for (var key in request) {
        if (!(key in validKeys)) {
            delete request[key];
        }
    }
    // For any invalid parameter, use the external key name in the error description.
    // displayName should be a string.
    if (typeof request.displayName !== 'undefined' &&
        !validator.isString(request.displayName)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISPLAY_NAME);
    }
    if ((typeof request.localId !== 'undefined' || uploadAccountRequest) &&
        !validator.isUid(request.localId)) {
        // This is called localId on the backend but the developer specifies this as
        // uid externally. So the error message should use the client facing name.
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID);
    }
    // email should be a string and a valid email.
    if (typeof request.email !== 'undefined' && !validator.isEmail(request.email)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL);
    }
    // phoneNumber should be a string and a valid phone number.
    if (typeof request.phoneNumber !== 'undefined' &&
        !validator.isPhoneNumber(request.phoneNumber)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHONE_NUMBER);
    }
    // password should be a string and a minimum of 6 chars.
    if (typeof request.password !== 'undefined' &&
        !validator.isPassword(request.password)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD);
    }
    // rawPassword should be a string and a minimum of 6 chars.
    if (typeof request.rawPassword !== 'undefined' &&
        !validator.isPassword(request.rawPassword)) {
        // This is called rawPassword on the backend but the developer specifies this as
        // password externally. So the error message should use the client facing name.
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD);
    }
    // emailVerified should be a boolean.
    if (typeof request.emailVerified !== 'undefined' &&
        typeof request.emailVerified !== 'boolean') {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL_VERIFIED);
    }
    // photoUrl should be a URL.
    if (typeof request.photoUrl !== 'undefined' &&
        !validator.isURL(request.photoUrl)) {
        // This is called photoUrl on the backend but the developer specifies this as
        // photoURL externally. So the error message should use the client facing name.
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHOTO_URL);
    }
    // disabled should be a boolean.
    if (typeof request.disabled !== 'undefined' &&
        typeof request.disabled !== 'boolean') {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISABLED_FIELD);
    }
    // validSince should be a number.
    if (typeof request.validSince !== 'undefined' &&
        !validator.isNumber(request.validSince)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_TOKENS_VALID_AFTER_TIME);
    }
    // createdAt should be a number.
    if (typeof request.createdAt !== 'undefined' &&
        !validator.isNumber(request.createdAt)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CREATION_TIME);
    }
    // lastSignInAt should be a number.
    if (typeof request.lastLoginAt !== 'undefined' &&
        !validator.isNumber(request.lastLoginAt)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_LAST_SIGN_IN_TIME);
    }
    // disableUser should be a boolean.
    if (typeof request.disableUser !== 'undefined' &&
        typeof request.disableUser !== 'boolean') {
        // This is called disableUser on the backend but the developer specifies this as
        // disabled externally. So the error message should use the client facing name.
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_DISABLED_FIELD);
    }
    // customAttributes should be stringified JSON with no blacklisted claims.
    // The payload should not exceed 1KB.
    if (typeof request.customAttributes !== 'undefined') {
        var developerClaims_1;
        try {
            developerClaims_1 = JSON.parse(request.customAttributes);
        }
        catch (error) {
            // JSON parsing error. This should never happen as we stringify the claims internally.
            // However, we still need to check since setAccountInfo via edit requests could pass
            // this field.
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_CLAIMS, error.message);
        }
        var invalidClaims_1 = [];
        // Check for any invalid claims.
        exports.RESERVED_CLAIMS.forEach(function (blacklistedClaim) {
            if (developerClaims_1.hasOwnProperty(blacklistedClaim)) {
                invalidClaims_1.push(blacklistedClaim);
            }
        });
        // Throw an error if an invalid claim is detected.
        if (invalidClaims_1.length > 0) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.FORBIDDEN_CLAIM, invalidClaims_1.length > 1 ?
                "Developer claims \"" + invalidClaims_1.join('", "') + "\" are reserved and cannot be specified." :
                "Developer claim \"" + invalidClaims_1[0] + "\" is reserved and cannot be specified.");
        }
        // Check claims payload does not exceed maxmimum size.
        if (request.customAttributes.length > MAX_CLAIMS_PAYLOAD_SIZE) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.CLAIMS_TOO_LARGE, "Developer claims payload should not exceed " + MAX_CLAIMS_PAYLOAD_SIZE + " characters.");
        }
    }
    // passwordHash has to be a base64 encoded string.
    if (typeof request.passwordHash !== 'undefined' &&
        !validator.isString(request.passwordHash)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD_HASH);
    }
    // salt has to be a base64 encoded string.
    if (typeof request.salt !== 'undefined' &&
        !validator.isString(request.salt)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PASSWORD_SALT);
    }
    // providerUserInfo has to be an array of valid UserInfo requests.
    if (typeof request.providerUserInfo !== 'undefined' &&
        !validator.isArray(request.providerUserInfo)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PROVIDER_DATA);
    }
    else if (validator.isArray(request.providerUserInfo)) {
        request.providerUserInfo.forEach(function (providerUserInfoEntry) {
            validateProviderUserInfo(providerUserInfoEntry);
        });
    }
}
/** Instantiates the createSessionCookie endpoint settings. */
exports.FIREBASE_AUTH_CREATE_SESSION_COOKIE = new api_request_1.ApiSettings('createSessionCookie', 'POST')
    // Set request validator.
    .setRequestValidator(function (request) {
    // Validate the ID token is a non-empty string.
    if (!validator.isNonEmptyString(request.idToken)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ID_TOKEN);
    }
    // Validate the custom session cookie duration.
    if (!validator.isNumber(request.validDuration) ||
        request.validDuration < MIN_SESSION_COOKIE_DURATION_SECS ||
        request.validDuration > MAX_SESSION_COOKIE_DURATION_SECS) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_SESSION_COOKIE_DURATION);
    }
})
    // Set response validator.
    .setResponseValidator(function (response) {
    // Response should always contain the session cookie.
    if (!validator.isNonEmptyString(response.sessionCookie)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR);
    }
});
/** Instantiates the uploadAccount endpoint settings. */
exports.FIREBASE_AUTH_UPLOAD_ACCOUNT = new api_request_1.ApiSettings('uploadAccount', 'POST');
/** Instantiates the downloadAccount endpoint settings. */
exports.FIREBASE_AUTH_DOWNLOAD_ACCOUNT = new api_request_1.ApiSettings('downloadAccount', 'POST')
    // Set request validator.
    .setRequestValidator(function (request) {
    // Validate next page token.
    if (typeof request.nextPageToken !== 'undefined' &&
        !validator.isNonEmptyString(request.nextPageToken)) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PAGE_TOKEN);
    }
    // Validate max results.
    if (!validator.isNumber(request.maxResults) ||
        request.maxResults <= 0 ||
        request.maxResults > MAX_DOWNLOAD_ACCOUNT_PAGE_SIZE) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "Required \"maxResults\" must be a positive non-zero number that does not exceed " +
            ("the allowed " + MAX_DOWNLOAD_ACCOUNT_PAGE_SIZE + "."));
    }
});
/** Instantiates the getAccountInfo endpoint settings. */
exports.FIREBASE_AUTH_GET_ACCOUNT_INFO = new api_request_1.ApiSettings('getAccountInfo', 'POST')
    // Set request validator.
    .setRequestValidator(function (request) {
    if (!request.localId && !request.email && !request.phoneNumber) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, 'INTERNAL ASSERT FAILED: Server request is missing user identifier');
    }
})
    // Set response validator.
    .setResponseValidator(function (response) {
    if (!response.users) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.USER_NOT_FOUND);
    }
});
/** Instantiates the deleteAccount endpoint settings. */
exports.FIREBASE_AUTH_DELETE_ACCOUNT = new api_request_1.ApiSettings('deleteAccount', 'POST')
    // Set request validator.
    .setRequestValidator(function (request) {
    if (!request.localId) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, 'INTERNAL ASSERT FAILED: Server request is missing user identifier');
    }
});
/** Instantiates the setAccountInfo endpoint settings for updating existing accounts. */
exports.FIREBASE_AUTH_SET_ACCOUNT_INFO = new api_request_1.ApiSettings('setAccountInfo', 'POST')
    // Set request validator.
    .setRequestValidator(function (request) {
    // localId is a required parameter.
    if (typeof request.localId === 'undefined') {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, 'INTERNAL ASSERT FAILED: Server request is missing user identifier');
    }
    validateCreateEditRequest(request);
})
    // Set response validator.
    .setResponseValidator(function (response) {
    // If the localId is not returned, then the request failed.
    if (!response.localId) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.USER_NOT_FOUND);
    }
});
/**
 * Instantiates the signupNewUser endpoint settings for creating a new user with or without
 * uid being specified. The backend will create a new one if not provided and return it.
 */
exports.FIREBASE_AUTH_SIGN_UP_NEW_USER = new api_request_1.ApiSettings('signupNewUser', 'POST')
    // Set request validator.
    .setRequestValidator(function (request) {
    // signupNewUser does not support customAttributes.
    if (typeof request.customAttributes !== 'undefined') {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "\"customAttributes\" cannot be set when creating a new user.");
    }
    // signupNewUser does not support validSince.
    if (typeof request.validSince !== 'undefined') {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, "\"validSince\" cannot be set when creating a new user.");
    }
    validateCreateEditRequest(request);
})
    // Set response validator.
    .setResponseValidator(function (response) {
    // If the localId is not returned, then the request failed.
    if (!response.localId) {
        throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INTERNAL_ERROR, 'INTERNAL ASSERT FAILED: Unable to create new user');
    }
});
/**
 * Class that provides mechanism to send requests to the Firebase Auth backend endpoints.
 */
var FirebaseAuthRequestHandler = /** @class */ (function () {
    /**
     * @param {FirebaseApp} app The app used to fetch access tokens to sign API requests.
     * @constructor
     */
    function FirebaseAuthRequestHandler(app) {
        this.baseUrl = "https://" + FIREBASE_AUTH_HOST + FIREBASE_AUTH_PATH;
        this.httpClient = new api_request_1.AuthorizedHttpClient(app);
    }
    /**
     * @param {any} response The response to check for errors.
     * @return {string|null} The error code if present; null otherwise.
     */
    FirebaseAuthRequestHandler.getErrorCode = function (response) {
        return (validator.isNonNullObject(response) && response.error && response.error.message) || null;
    };
    /**
     * Creates a new Firebase session cookie with the specified duration that can be used for
     * session management (set as a server side session cookie with custom cookie policy).
     * The session cookie JWT will have the same payload claims as the provided ID token.
     *
     * @param {string} idToken The Firebase ID token to exchange for a session cookie.
     * @param {number} expiresIn The session cookie duration in milliseconds.
     *
     * @return {Promise<string>} A promise that resolves on success with the created session cookie.
     */
    FirebaseAuthRequestHandler.prototype.createSessionCookie = function (idToken, expiresIn) {
        var request = {
            idToken: idToken,
            // Convert to seconds.
            validDuration: expiresIn / 1000,
        };
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_CREATE_SESSION_COOKIE, request)
            .then(function (response) { return response.sessionCookie; });
    };
    /**
     * Looks up a user by uid.
     *
     * @param {string} uid The uid of the user to lookup.
     * @return {Promise<object>} A promise that resolves with the user information.
     */
    FirebaseAuthRequestHandler.prototype.getAccountInfoByUid = function (uid) {
        if (!validator.isUid(uid)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        }
        var request = {
            localId: [uid],
        };
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_GET_ACCOUNT_INFO, request);
    };
    /**
     * Looks up a user by email.
     *
     * @param {string} email The email of the user to lookup.
     * @return {Promise<object>} A promise that resolves with the user information.
     */
    FirebaseAuthRequestHandler.prototype.getAccountInfoByEmail = function (email) {
        if (!validator.isEmail(email)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_EMAIL));
        }
        var request = {
            email: [email],
        };
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_GET_ACCOUNT_INFO, request);
    };
    /**
     * Looks up a user by phone number.
     *
     * @param {string} phoneNumber The phone number of the user to lookup.
     * @return {Promise<object>} A promise that resolves with the user information.
     */
    FirebaseAuthRequestHandler.prototype.getAccountInfoByPhoneNumber = function (phoneNumber) {
        if (!validator.isPhoneNumber(phoneNumber)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_PHONE_NUMBER));
        }
        var request = {
            phoneNumber: [phoneNumber],
        };
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_GET_ACCOUNT_INFO, request);
    };
    /**
     * Exports the users (single batch only) with a size of maxResults and starting from
     * the offset as specified by pageToken.
     *
     * @param {number=} maxResults The page size, 1000 if undefined. This is also the maximum
     *     allowed limit.
     * @param {string=} pageToken The next page token. If not specified, returns users starting
     *     without any offset. Users are returned in the order they were created from oldest to
     *     newest, relative to the page token offset.
     * @return {Promise<object>} A promise that resolves with the current batch of downloaded
     *     users and the next page token if available. For the last page, an empty list of users
     *     and no page token are returned.
     */
    FirebaseAuthRequestHandler.prototype.downloadAccount = function (maxResults, pageToken) {
        if (maxResults === void 0) { maxResults = MAX_DOWNLOAD_ACCOUNT_PAGE_SIZE; }
        // Construct request.
        var request = {
            maxResults: maxResults,
            nextPageToken: pageToken,
        };
        // Remove next page token if not provided.
        if (typeof request.nextPageToken === 'undefined') {
            delete request.nextPageToken;
        }
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_DOWNLOAD_ACCOUNT, request)
            .then(function (response) {
            // No more users available.
            if (!response.users) {
                response.users = [];
            }
            return response;
        });
    };
    /**
     * Imports the list of users provided to Firebase Auth. This is useful when
     * migrating from an external authentication system without having to use the Firebase CLI SDK.
     * At most, 1000 users are allowed to be imported one at a time.
     * When importing a list of password users, UserImportOptions are required to be specified.
     *
     * @param {UserImportRecord[]} users The list of user records to import to Firebase Auth.
     * @param {UserImportOptions=} options The user import options, required when the users provided
     *     include password credentials.
     * @return {Promise<UserImportResult>} A promise that resolves when the operation completes
     *     with the result of the import. This includes the number of successful imports, the number
     *     of failed uploads and their corresponding errors.
     */
    FirebaseAuthRequestHandler.prototype.uploadAccount = function (users, options) {
        // This will throw if any error is detected in the hash options.
        // For errors in the list of users, this will not throw and will report the errors and the
        // corresponding user index in the user import generated response below.
        // No need to validate raw request or raw response as this is done in UserImportBuilder.
        var userImportBuilder = new user_import_builder_1.UserImportBuilder(users, options, function (userRequest) {
            // Pass true to validate the uploadAccount specific fields.
            validateCreateEditRequest(userRequest, true);
        });
        var request = userImportBuilder.buildRequest();
        // Fail quickly if more users than allowed are to be imported.
        if (validator.isArray(users) && users.length > MAX_UPLOAD_ACCOUNT_BATCH_SIZE) {
            throw new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.MAXIMUM_USER_COUNT_EXCEEDED, "A maximum of " + MAX_UPLOAD_ACCOUNT_BATCH_SIZE + " users can be imported at once.");
        }
        // If no remaining user in request after client side processing, there is no need
        // to send the request to the server.
        if (request.users.length === 0) {
            return Promise.resolve(userImportBuilder.buildResponse([]));
        }
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_UPLOAD_ACCOUNT, request)
            .then(function (response) {
            // No error object is returned if no error encountered.
            var failedUploads = (response.error || []);
            // Rewrite response as UserImportResult and re-insert client previously detected errors.
            return userImportBuilder.buildResponse(failedUploads);
        });
    };
    /**
     * Deletes an account identified by a uid.
     *
     * @param {string} uid The uid of the user to delete.
     * @return {Promise<object>} A promise that resolves when the user is deleted.
     */
    FirebaseAuthRequestHandler.prototype.deleteAccount = function (uid) {
        if (!validator.isUid(uid)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        }
        var request = {
            localId: uid,
        };
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_DELETE_ACCOUNT, request);
    };
    /**
     * Sets additional developer claims on an existing user identified by provided UID.
     *
     * @param {string} uid The user to edit.
     * @param {object} customUserClaims The developer claims to set.
     * @return {Promise<string>} A promise that resolves when the operation completes
     *     with the user id that was edited.
     */
    FirebaseAuthRequestHandler.prototype.setCustomUserClaims = function (uid, customUserClaims) {
        // Validate user UID.
        if (!validator.isUid(uid)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        }
        else if (!validator.isObject(customUserClaims)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, 'CustomUserClaims argument must be an object or null.'));
        }
        // Delete operation. Replace null with an empty object.
        if (customUserClaims === null) {
            customUserClaims = {};
        }
        // Construct custom user attribute editting request.
        var request = {
            localId: uid,
            customAttributes: JSON.stringify(customUserClaims),
        };
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_SET_ACCOUNT_INFO, request)
            .then(function (response) {
            return response.localId;
        });
    };
    /**
     * Edits an existing user.
     *
     * @param {string} uid The user to edit.
     * @param {object} properties The properties to set on the user.
     * @return {Promise<string>} A promise that resolves when the operation completes
     *     with the user id that was edited.
     */
    FirebaseAuthRequestHandler.prototype.updateExistingAccount = function (uid, properties) {
        if (!validator.isUid(uid)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        }
        else if (!validator.isNonNullObject(properties)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, 'Properties argument must be a non-null object.'));
        }
        // Build the setAccountInfo request.
        var request = deep_copy_1.deepCopy(properties);
        request.localId = uid;
        // For deleting displayName or photoURL, these values must be passed as null.
        // They will be removed from the backend request and an additional parameter
        // deleteAttribute: ['PHOTO_URL', 'DISPLAY_NAME']
        // with an array of the parameter names to delete will be passed.
        // Parameters that are deletable and their deleteAttribute names.
        // Use client facing names, photoURL instead of photoUrl.
        var deletableParams = {
            displayName: 'DISPLAY_NAME',
            photoURL: 'PHOTO_URL',
        };
        // Properties to delete if available.
        request.deleteAttribute = [];
        for (var key in deletableParams) {
            if (request[key] === null) {
                // Add property identifier to list of attributes to delete.
                request.deleteAttribute.push(deletableParams[key]);
                // Remove property from request.
                delete request[key];
            }
        }
        if (request.deleteAttribute.length === 0) {
            delete request.deleteAttribute;
        }
        // For deleting phoneNumber, this value must be passed as null.
        // It will be removed from the backend request and an additional parameter
        // deleteProvider: ['phone'] with an array of providerIds (phone in this case),
        // will be passed.
        // Currently this applies to phone provider only.
        if (request.phoneNumber === null) {
            request.deleteProvider = ['phone'];
            delete request.phoneNumber;
        }
        else {
            // Doesn't apply to other providers in admin SDK.
            delete request.deleteProvider;
        }
        // Rewrite photoURL to photoUrl.
        if (typeof request.photoURL !== 'undefined') {
            request.photoUrl = request.photoURL;
            delete request.photoURL;
        }
        // Rewrite disabled to disableUser.
        if (typeof request.disabled !== 'undefined') {
            request.disableUser = request.disabled;
            delete request.disabled;
        }
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_SET_ACCOUNT_INFO, request)
            .then(function (response) {
            return response.localId;
        });
    };
    /**
     * Revokes all refresh tokens for the specified user identified by the uid provided.
     * In addition to revoking all refresh tokens for a user, all ID tokens issued
     * before revocation will also be revoked on the Auth backend. Any request with an
     * ID token generated before revocation will be rejected with a token expired error.
     * Note that due to the fact that the timestamp is stored in seconds, any tokens minted in
     * the same second as the revocation will still be valid. If there is a chance that a token
     * was minted in the last second, delay for 1 second before revoking.
     *
     * @param {string} uid The user whose tokens are to be revoked.
     * @return {Promise<string>} A promise that resolves when the operation completes
     *     successfully with the user id of the corresponding user.
     */
    FirebaseAuthRequestHandler.prototype.revokeRefreshTokens = function (uid) {
        // Validate user UID.
        if (!validator.isUid(uid)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_UID));
        }
        var request = {
            localId: uid,
            // validSince is in UTC seconds.
            validSince: Math.ceil(new Date().getTime() / 1000),
        };
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_SET_ACCOUNT_INFO, request)
            .then(function (response) {
            return response.localId;
        });
    };
    /**
     * Create a new user with the properties supplied.
     *
     * @param {object} properties The properties to set on the user.
     * @return {Promise<string>} A promise that resolves when the operation completes
     *     with the user id that was created.
     */
    FirebaseAuthRequestHandler.prototype.createNewAccount = function (properties) {
        if (!validator.isNonNullObject(properties)) {
            return Promise.reject(new error_1.FirebaseAuthError(error_1.AuthClientErrorCode.INVALID_ARGUMENT, 'Properties argument must be a non-null object.'));
        }
        // Build the signupNewUser request.
        var request = deep_copy_1.deepCopy(properties);
        // Rewrite photoURL to photoUrl.
        if (typeof request.photoURL !== 'undefined') {
            request.photoUrl = request.photoURL;
            delete request.photoURL;
        }
        // Rewrite uid to localId if it exists.
        if (typeof request.uid !== 'undefined') {
            request.localId = request.uid;
            delete request.uid;
        }
        return this.invokeRequestHandler(exports.FIREBASE_AUTH_SIGN_UP_NEW_USER, request)
            .then(function (response) {
            // Return the user id.
            return response.localId;
        });
    };
    /**
     * Invokes the request handler based on the API settings object passed.
     *
     * @param {ApiSettings} apiSettings The API endpoint settings to apply to request and response.
     * @param {object} requestData The request data.
     * @return {Promise<object>} A promise that resolves with the response.
     */
    FirebaseAuthRequestHandler.prototype.invokeRequestHandler = function (apiSettings, requestData) {
        var _this = this;
        return Promise.resolve()
            .then(function () {
            // Validate request.
            var requestValidator = apiSettings.getRequestValidator();
            requestValidator(requestData);
            // Process request.
            var req = {
                method: apiSettings.getHttpMethod(),
                url: "" + _this.baseUrl + apiSettings.getEndpoint(),
                headers: FIREBASE_AUTH_HEADER,
                data: requestData,
                timeout: FIREBASE_AUTH_TIMEOUT,
            };
            return _this.httpClient.send(req);
        })
            .then(function (response) {
            // Validate response.
            var responseValidator = apiSettings.getResponseValidator();
            responseValidator(response.data);
            // Return entire response.
            return response.data;
        })
            .catch(function (err) {
            if (err instanceof api_request_1.HttpError) {
                var error = err.response.data;
                var errorCode = FirebaseAuthRequestHandler.getErrorCode(error);
                throw error_1.FirebaseAuthError.fromServerError(errorCode, /* message */ undefined, error);
            }
            throw err;
        });
    };
    return FirebaseAuthRequestHandler;
}());
exports.FirebaseAuthRequestHandler = FirebaseAuthRequestHandler;
