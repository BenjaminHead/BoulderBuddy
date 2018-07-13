"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var firebase = require('nativescript-plugin-firebase');
var app = require("application");
var nativescript_background_fetch_1 = require("nativescript-background-fetch");
var platform = require("platform");
if (app.ios) {
    var MyDelegate = /** @class */ (function (_super) {
        __extends(MyDelegate, _super);
        function MyDelegate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MyDelegate.prototype.applicationPerformFetchWithCompletionHandler = function (application, completionHandler) {
            nativescript_background_fetch_1.BackgroundFetch.performFetchWithCompletionHandler(application, completionHandler);
        };
        MyDelegate.ObjCProtocols = [UIApplicationDelegate];
        return MyDelegate;
    }(UIResponder));
    app.ios.delegate = MyDelegate;
}
if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w");
}
if (app.ios) {
    GMSServices.provideAPIKey("AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w");
}
firebase.init({
    persist: true,
    iOSEmulatorFlush: true
})
    .then(function (instance) {
    console.log('firebase.init done');
}, function (error) {
    console.log("firebase.init error: " + error);
});
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEU7QUFFNUUsMkNBQXlDO0FBRXpDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpELGlDQUFtQztBQUVuQywrRUFBZ0U7QUFFaEUsbUNBQXFDO0FBSXJDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ1I7UUFBeUIsOEJBQVc7UUFBcEM7O1FBTUEsQ0FBQztRQUhRLGlFQUE0QyxHQUFuRCxVQUFvRCxXQUEwQixFQUFFLGlCQUFxQjtZQUMzRiwrQ0FBZSxDQUFDLGlDQUFpQyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7UUFKSyx3QkFBYSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUt4RCxpQkFBQztLQUFBLEFBTkQsQ0FBeUIsV0FBVyxHQU1uQztJQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUNoQyxDQUFDO0FBRUwsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakIsV0FBVyxDQUFDLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFFRCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNULFdBQVcsQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNWLE9BQU8sRUFBRSxJQUFJO0lBQ2IsZ0JBQWdCLEVBQUUsSUFBSTtDQUN6QixDQUFDO0tBQ0csSUFBSSxDQUFDLFVBQUEsUUFBUTtJQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFDLENBQUM7QUFFUCxzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcblxuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcblxuaW1wb3J0IHsgQmFja2dyb3VuZEZldGNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWZldGNoXCI7XG5cbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5kZWNsYXJlIHZhciBHTVNTZXJ2aWNlczogYW55O1xuXG5pZiAoYXBwLmlvcykge1xuICAgICAgY2xhc3MgTXlEZWxlZ2F0ZSBleHRlbmRzIFVJUmVzcG9uZGVyIGltcGxlbWVudHMgVUlBcHBsaWNhdGlvbkRlbGVnYXRlIHtcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmpDUHJvdG9jb2xzID0gW1VJQXBwbGljYXRpb25EZWxlZ2F0ZV07XG5cbiAgICAgICAgcHVibGljIGFwcGxpY2F0aW9uUGVyZm9ybUZldGNoV2l0aENvbXBsZXRpb25IYW5kbGVyKGFwcGxpY2F0aW9uOiBVSUFwcGxpY2F0aW9uLCBjb21wbGV0aW9uSGFuZGxlcjphbnkpIHtcbiAgICAgICAgICAgICAgICAgIEJhY2tncm91bmRGZXRjaC5wZXJmb3JtRmV0Y2hXaXRoQ29tcGxldGlvbkhhbmRsZXIoYXBwbGljYXRpb24sIGNvbXBsZXRpb25IYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcHAuaW9zLmRlbGVnYXRlID0gTXlEZWxlZ2F0ZTtcbiAgICB9XG5cbmlmIChwbGF0Zm9ybS5pc0lPUykge1xuICAgIEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3dcIik7XG59XG5cbmlmKGFwcC5pb3MpIHtcbiAgICBHTVNTZXJ2aWNlcy5wcm92aWRlQVBJS2V5KFwiQUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3XCIpO1xufVxuXG5maXJlYmFzZS5pbml0KHtcbiAgICBwZXJzaXN0OiB0cnVlLFxuICAgIGlPU0VtdWxhdG9yRmx1c2g6IHRydWVcbn0pXG4gICAgLnRoZW4oaW5zdGFuY2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZmlyZWJhc2UuaW5pdCBkb25lJyk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICB9KTtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=