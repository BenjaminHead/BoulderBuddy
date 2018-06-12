"use strict";
var TAG = "NSBackgroundFetch";
var emptyFn = function () { };
var BackgroundFetch = (function () {
    function BackgroundFetch() {
    }
    BackgroundFetch.performFetchWithCompletionHandler = function (application, completionHandler) {
        TSBackgroundFetch.sharedInstance().performFetchWithCompletionHandlerApplicationState(completionHandler, application.applicationState);
    };
    BackgroundFetch.configure = function (config, callback, failure) {
        var _this = this;
        var fetchManager = TSBackgroundFetch.sharedInstance();
        fetchManager.configureCallback(config, function (status) {
            if (status != 2 /* Available */) {
                console.warn(TAG, "failed to start TSBackgroundFetch");
                failure(status);
                return;
            }
            _this.configured = true;
            fetchManager.addListenerCallback(TAG, callback);
            fetchManager.start();
        });
    };
    BackgroundFetch.start = function (success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        TSBackgroundFetch.sharedInstance().start(function (status) {
            if (status == 2 /* Available */) {
                success();
            }
            else {
                console.warn(TAG, "failed to start TSBackgroundFetch");
                failure(status);
            }
        });
    };
    BackgroundFetch.stop = function (success, failure) {
        success = success || emptyFn;
        failure = failure || emptyFn;
        TSBackgroundFetch.sharedInstance().stop();
        success();
    };
    BackgroundFetch.status = function (success) {
        TSBackgroundFetch.sharedInstance().status(function (status) {
            success(status);
        });
    };
    BackgroundFetch.finish = function (result) {
        result = result || 1 /* NoData */;
        TSBackgroundFetch.sharedInstance().finishResult(TAG, result);
    };
    return BackgroundFetch;
}());
exports.BackgroundFetch = BackgroundFetch;
