"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var background_geolocation_common_1 = require("./background-geolocation.common");
var utils = require("utils/utils");
var TS_LOCATION_TYPE_MOTIONCHANGE = 0;
var TS_LOCATION_TYPE_CURRENT = 1;
var TS_LOCATION_TYPE_SAMPLE = 2;
var emptyFn = function (param) { };
var BackgroundGeolocation = (function (_super) {
    __extends(BackgroundGeolocation, _super);
    function BackgroundGeolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Configuration Methods
    */
    BackgroundGeolocation.addListener = function (event, success, failure) {
        var _this = this;
        // Handle {Object} form #on({foo: fooHandler, bar: barHandler});
        if (typeof (event) === 'object') {
            var listener, key;
            for (key in event) {
                this.on(key, event[key]);
            }
            return;
        }
        if (this.events.indexOf(event) < 0) {
            throw "Invalid event: " + event;
        }
        if (typeof (this.listeners[event]) === 'object') {
            var callback = void 0;
            switch (event) {
                case 'location':
                    callback = function (tsLocation) {
                        var location = _this.getJsObjectFromNSDictionary(tsLocation.toDictionary());
                        success(location);
                    };
                    this.getAdapter().onLocationFailure(callback, failure);
                    break;
                case 'motionchange':
                    callback = function (tsLocation) {
                        var location = _this.getJsObjectFromNSDictionary(tsLocation.toDictionary());
                        var isMoving = tsLocation.isMoving;
                        success(isMoving, location);
                    };
                    this.getAdapter().onMotionChange(callback);
                    break;
                case 'activitychange':
                    callback = function (event) {
                        var params = { activity: event.activity, confidence: event.confidence };
                        success(params);
                    };
                    this.getAdapter().onActivityChange(callback);
                    break;
                case 'heartbeat':
                    callback = function (event) {
                        var location = _this.getJsObjectFromNSDictionary(event.location.toDictionary());
                        var params = { location: location };
                        success(params);
                    };
                    this.getAdapter().onHeartbeat(callback);
                    break;
                case 'geofence':
                    callback = function (event) {
                        var params = event.toDictionary().mutableCopy();
                        params.setObjectForKey(event.location.toDictionary(), "location");
                        success(_this.getJsObjectFromNSDictionary(params));
                    };
                    this.getAdapter().onGeofence(callback);
                    break;
                case 'geofenceschange':
                    callback = function (event) {
                        var params = _this.getJsObjectFromNSDictionary(event.toDictionary());
                        success(params);
                    };
                    this.getAdapter().onGeofencesChange(callback);
                    break;
                case 'http':
                    callback = function (event) {
                        var params = { "status": event.statusCode, "responseText": event.responseText };
                        var callback = (event.isSuccess) ? success : failure;
                        success(params);
                    };
                    this.getAdapter().onHttp(callback);
                    break;
                case 'providerchange':
                    callback = function (event) {
                        var params = _this.getJsObjectFromNSDictionary(event.toDictionary());
                        success(params);
                    };
                    this.getAdapter().onProviderChange(callback);
                    break;
                case 'schedule':
                    callback = function (event) {
                        var state = _this.getJsObjectFromNSDictionary(event.state);
                        success(state);
                    };
                    this.getAdapter().onSchedule(callback);
                    break;
                case 'powersavechange':
                    callback = function (event) {
                        success(event.isPowerSaveMode);
                    };
                    this.getAdapter().onPowerSaveChange(callback);
                    break;
            }
            if (callback) {
                this.registerCallback(event, success, callback);
            }
        }
        else {
            console.warn('FAiled to find this.events.indexOf: ', event);
        }
    };
    BackgroundGeolocation.removeNativeListener = function (event, callback) {
        this.getAdapter().removeListenerCallback(event, callback);
    };
    BackgroundGeolocation.configure = function (config, success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        var locationManager = this.getAdapter();
        this.syncTaskId = null;
        this.state = locationManager.configure(config);
        this.isMoving = this.state.isMoving;
        this.enabled = this.state.enabled;
        success(this.getJsObjectFromNSDictionary(this.state));
    };
    BackgroundGeolocation.setConfig = function (config, success, failure) {
        var locationManager = this.getAdapter();
        success = success || emptyFn;
        failure = failure || emptyFn;
        locationManager.setConfig(config);
        this.getState(success);
    };
    BackgroundGeolocation.getState = function (success) {
        success(this.getJsObjectFromNSDictionary(this.getAdapter().getState()));
    };
    /**
    * Tracking Methods
    */
    BackgroundGeolocation.start = function (success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().start();
        this.getState(success);
    };
    BackgroundGeolocation.stop = function (success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().stop();
        this.getState(success);
    };
    BackgroundGeolocation.startGeofences = function (success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        var adapter = this.getAdapter();
        adapter.startGeofences();
        this.getState(success);
    };
    BackgroundGeolocation.changePace = function (value, success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().changePace(value);
        success(value);
    };
    BackgroundGeolocation.startSchedule = function (success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().startSchedule();
        this.getState(success);
    };
    BackgroundGeolocation.stopSchedule = function (success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().stopSchedule();
        this.getState(success);
    };
    BackgroundGeolocation.getCurrentPosition = function (success, failure, options) {
        var _this = this;
        failure = failure || emptyFn;
        this.getAdapter().getCurrentPositionSuccessFailure(options || {}, function (tsLocation) {
            success(_this.getJsObjectFromNSDictionary(tsLocation.toDictionary()));
        }, function (error) {
            failure(error.code);
        });
    };
    BackgroundGeolocation.watchPosition = function (success, failure, options) {
        var _this = this;
        failure = failure || emptyFn;
        this.getAdapter().watchPositionSuccessFailure(options || {}, function (tsLocation) {
            success(_this.getJsObjectFromNSDictionary(tsLocation.toDictionary()));
        }, function (error) {
            failure(error.code);
        });
    };
    BackgroundGeolocation.stopWatchPosition = function (success, failure) {
        this.getAdapter().stopWatchPosition();
        if (success) {
            success(true);
        }
    };
    BackgroundGeolocation.getOdometer = function (success, failure) {
        success(this.getAdapter().getOdometer());
    };
    BackgroundGeolocation.setOdometer = function (value, success, failure) {
        var _this = this;
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().setOdometerSuccessFailure(value, function (tsLocation) {
            success(_this.getJsObjectFromNSDictionary(tsLocation.toDictionary()));
        }, function (error) {
            failure(error.code);
        });
    };
    BackgroundGeolocation.resetOdometer = function (success, failure) {
        this.setOdometer(0, success, failure);
    };
    /**
    * HTTP & Persistence Methods
    */
    BackgroundGeolocation.sync = function (success, failure) {
        var _this = this;
        failure = failure || emptyFn;
        this.getAdapter().syncFailure(function (records) {
            success(_this.getJsArrayFromNSArray(records));
        }, function (error) {
            failure(error.code);
        });
    };
    BackgroundGeolocation.getLocations = function (success, failure) {
        var _this = this;
        failure = failure || emptyFn;
        this.getAdapter().getLocationsFailure(function (rs) {
            success(_this.getJsArrayFromNSArray(rs));
        }, failure);
    };
    BackgroundGeolocation.getCount = function (success) {
        success(this.getAdapter().getCount());
    };
    BackgroundGeolocation.insertLocation = function (data, success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().insertLocationSuccessFailure(data, function (uuid) {
            success(uuid);
        }, function (error) {
            failure(error);
        });
    };
    // @deprecated
    BackgroundGeolocation.clearDatabase = function (success, failure) {
        this.destroyLocations(success, failure);
    };
    BackgroundGeolocation.destroyLocations = function (success, failure) {
        failure = failure || emptyFn;
        this.getAdapter().destroyLocationsFailure(success, failure);
    };
    /**
    * Geofencing Methods
    */
    BackgroundGeolocation.addGeofence = function (params, success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().addGeofenceSuccessFailure(params, success, failure);
    };
    BackgroundGeolocation.removeGeofence = function (identifier, success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().removeGeofenceSuccessFailure(identifier, success, failure);
    };
    BackgroundGeolocation.addGeofences = function (geofences, success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().addGeofencesSuccessFailure(geofences, success, failure);
    };
    BackgroundGeolocation.removeGeofences = function (geofences, success, failure) {
        if (typeof (geofences) === 'function') {
            failure = success;
            success = geofences;
            geofences = [];
        }
        geofences = geofences || [];
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().removeGeofencesSuccessFailure(geofences, success, failure);
    };
    BackgroundGeolocation.getGeofences = function (success, failure) {
        var _this = this;
        success = success || emptyFn;
        failure = failure || emptyFn;
        this.getAdapter().getGeofencesFailure(function (geofences) {
            success(_this.getJsArrayFromNSArray(geofences));
        }, function (error) {
            failure(error);
        });
    };
    BackgroundGeolocation.startBackgroundTask = function (success) {
        success(this.getAdapter().createBackgroundTask());
    };
    BackgroundGeolocation.finish = function (taskId) {
        this.getAdapter().stopBackgroundTask(taskId);
    };
    /**
    * Logging & Debug methods
    */
    BackgroundGeolocation.playSound = function (soundId) {
        this.getAdapter().playSound(soundId);
    };
    BackgroundGeolocation.getLog = function (success, failure) {
        this.getAdapter().getLogFailure(success, failure);
    };
    BackgroundGeolocation.destroyLog = function (success, failure) {
        if (this.getAdapter().destroyLog()) {
            if (success) {
                success();
            }
        }
        else if (failure) {
            failure();
        }
    };
    BackgroundGeolocation.emailLog = function (email, success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
        this.getAdapter().emailLogSuccessFailure(email, success, failure);
    };
    BackgroundGeolocation.getSensors = function (success, failure) {
        failure = failure || emptyFn;
        var adapter = this.getAdapter();
        var result = {
            "platform": "ios",
            "accelerometer": adapter.isAccelerometerAvailable(),
            "gyroscope": adapter.isGyroAvailable(),
            "magnetometer": adapter.isMagnetometerAvailable(),
            "motion_hardware": adapter.isMotionHardwareAvailable()
        };
        success(result);
    };
    BackgroundGeolocation.isPowerSaveMode = function (success, failure) {
        var isPowerSaveMode = this.getAdapter().isPowerSaveMode();
        success(isPowerSaveMode);
    };
    /**
    * Private
    */
    BackgroundGeolocation.getAdapter = function () {
        if (!this.adapter) {
            var app_1 = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
            this.adapter = TSLocationManager.sharedInstance();
            this.adapter.viewController = app_1.keyWindow.rootViewController;
            this.logger = new background_geolocation_common_1.Logger(this.adapter);
        }
        return this.adapter;
    };
    BackgroundGeolocation.getJsObjectFromNSDictionary = function (dictionary) {
        var keys = dictionary.allKeys;
        var result = {};
        for (var loop = 0; loop < keys.count; loop++) {
            var key = keys[loop];
            var item = dictionary.objectForKey(key);
            result[key] = this.getJsObject(item);
        }
        return result;
    };
    BackgroundGeolocation.getJsArrayFromNSArray = function (array) {
        var result = [];
        for (var loop = 0; loop < array.count; loop++) {
            result.push(this.getJsObject(array.objectAtIndex(loop)));
        }
        return result;
    };
    BackgroundGeolocation.getJsObject = function (object) {
        if (object instanceof NSDictionary) {
            return this.getJsObjectFromNSDictionary(object);
        }
        if (object instanceof NSArray) {
            return this.getJsArrayFromNSArray(object);
        }
        return object;
    };
    return BackgroundGeolocation;
}(background_geolocation_common_1.AbstractBackgroundGeolocation));
exports.BackgroundGeolocation = BackgroundGeolocation;
