"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Platform = require("platform");
var Logger = (function () {
    function Logger(adapter) {
        this.adapter = adapter;
    }
    Logger.prototype.error = function (msg) {
        this.log('error', msg);
    };
    Logger.prototype.warn = function (msg) {
        this.log('warn', msg);
    };
    Logger.prototype.debug = function (msg) {
        this.log('debug', msg);
    };
    Logger.prototype.notice = function (msg) {
        this.log('notice', msg);
    };
    Logger.prototype.header = function (msg) {
        this.log('header', msg);
    };
    Logger.prototype.on = function (msg) {
        this.log('on', msg);
    };
    Logger.prototype.off = function (msg) {
        this.log('off', msg);
    };
    Logger.prototype.ok = function (msg) {
        this.log('ok', msg);
    };
    Logger.prototype.log = function (level, msg) {
        if (Platform.isAndroid) {
            this.adapter.log(level, msg);
        }
        else if (Platform.isIOS) {
            this.adapter.logMessage(level, msg);
        }
    };
    return Logger;
}());
exports.Logger = Logger;
var AbstractBackgroundGeolocation = (function () {
    function AbstractBackgroundGeolocation() {
    }
    /**
    * @abstract
    */
    AbstractBackgroundGeolocation.addListener = function (event, success, failure) {
        // Override me
    };
    AbstractBackgroundGeolocation.on = function (event, success, failure) {
        this.addListener(event, success, failure);
    };
    AbstractBackgroundGeolocation.removeListener = function (event, clientCallback) {
        if (this.events.indexOf(event) < 0) {
            throw "Invalid event: " + event;
        }
        var listeners = this.listeners[event];
        var listener = listeners.find(function (i) { return i.clientCallback === clientCallback; });
        if (listener) {
            this.removeNativeListener(event, listener.nativeCallback);
            listeners.splice(listeners.indexOf(listener), 1);
        }
        else {
            console.warn('Failed to removeListener for event: ', event, JSON.stringify(listeners));
        }
    };
    /**
    * @abstract
    */
    AbstractBackgroundGeolocation.removeNativeListener = function (event, callback) {
        // Override me
    };
    /**
    * @alias #removeListener
    */
    AbstractBackgroundGeolocation.un = function (event, clientCallback) {
        this.removeListener(event, clientCallback);
    };
    AbstractBackgroundGeolocation.removeListeners = function (event) {
        if (event) {
            if (!this.listeners[event]) {
                throw "Invalid event: " + event;
            }
            this.listeners[event] = [];
            this.getAdapter().removeListeners(event);
        }
        else {
            for (var key in this.listeners) {
                this.listeners[key] = [];
            }
            this.getAdapter().removeListeners();
        }
    };
    /**
    * @abstract
    */
    AbstractBackgroundGeolocation.getAdapter = function () {
        return {
            removeListener: function (event, callback) { },
            removeListeners: function () { }
        };
    };
    AbstractBackgroundGeolocation.registerCallback = function (event, clientCallback, nativeCallback) {
        this.listeners[event].push({
            clientCallback: clientCallback,
            nativeCallback: nativeCallback
        });
    };
    /**
    * @abstract
    */
    AbstractBackgroundGeolocation.removeGeofences = function (geofences, success, failure) {
        // Override me
    };
    AbstractBackgroundGeolocation.removeAllGeofences = function (success, failure) {
        this.removeGeofences([], success, failure);
    };
    return AbstractBackgroundGeolocation;
}());
AbstractBackgroundGeolocation.listeners = {
    location: [],
    http: [],
    motionchange: [],
    error: [],
    heartbeat: [],
    schedule: [],
    activitychange: [],
    providerchange: [],
    geofence: [],
    geofenceschange: [],
    powersavechange: []
};
AbstractBackgroundGeolocation.events = [
    'location',
    'motionchange',
    'providerchange',
    'activitychange',
    'geofenceschange',
    'heartbeat',
    'geofence',
    'schedule',
    'error',
    'http',
    'powersavechange'
];
AbstractBackgroundGeolocation.LOG_LEVEL_OFF = 0;
AbstractBackgroundGeolocation.LOG_LEVEL_ERROR = 1;
AbstractBackgroundGeolocation.LOG_LEVEL_WARNING = 2;
AbstractBackgroundGeolocation.LOG_LEVEL_INFO = 3;
AbstractBackgroundGeolocation.LOG_LEVEL_DEBUG = 4;
AbstractBackgroundGeolocation.LOG_LEVEL_VERBOSE = 5;
AbstractBackgroundGeolocation.DESIRED_ACCURACY_HIGH = 0;
AbstractBackgroundGeolocation.DESIRED_ACCURACY_MEDIUM = 10;
AbstractBackgroundGeolocation.DESIRED_ACCURACY_LOW = 100;
AbstractBackgroundGeolocation.DESIRED_ACCURACY_VERY_LOW = 1000;
AbstractBackgroundGeolocation.AUTHORIZATION_STATUS_NOT_DETERMINED = 0;
AbstractBackgroundGeolocation.AUTHORIZATION_STATUS_RESTRICTED = 1;
AbstractBackgroundGeolocation.AUTHORIZATION_STATUS_DENIED = 2;
AbstractBackgroundGeolocation.AUTHORIZATION_STATUS_ALWAYS = 3;
AbstractBackgroundGeolocation.AUTHORIZATION_STATUS_WHEN_IN_USE = 4;
AbstractBackgroundGeolocation.NOTIFICATION_PRIORITY_DEFAULT = 0;
AbstractBackgroundGeolocation.NOTIFICATION_PRIORITY_HIGH = 1;
AbstractBackgroundGeolocation.NOTIFICATION_PRIORITY_LOW = -1;
AbstractBackgroundGeolocation.NOTIFICATION_PRIORITY_MAX = 2;
AbstractBackgroundGeolocation.NOTIFICATION_PRIORITY_MIN = -2;
exports.AbstractBackgroundGeolocation = AbstractBackgroundGeolocation;
