"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var firebase = require('nativescript-plugin-firebase');
var app = require("application");
var nativescript_background_fetch_1 = require("nativescript-background-fetch");
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
firebase.init({
    persist: true
})
    .then(function (instance) {
    console.log('firebase.init done');
}, function (error) {
    console.log("firebase.init error: " + error);
});
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEU7QUFFNUUsMkNBQXlDO0FBRXpDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpELGlDQUFtQztBQUVuQywrRUFBZ0U7QUFFaEUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDUjtRQUF5Qiw4QkFBVztRQUFwQzs7UUFNQSxDQUFDO1FBSFEsaUVBQTRDLEdBQW5ELFVBQW9ELFdBQTBCLEVBQUUsaUJBQXFCO1lBQzNGLCtDQUFlLENBQUMsaUNBQWlDLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUpLLHdCQUFhLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBS3hELGlCQUFDO0tBQUEsQUFORCxDQUF5QixXQUFXLEdBTW5DO0lBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ2hDLENBQUM7QUFFTCxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ1YsT0FBTyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztLQUNHLElBQUksQ0FBQyxVQUFBLFFBQVE7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDO0FBRVAsc0NBQTJCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5cbmltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5cbmltcG9ydCB7IEJhY2tncm91bmRGZXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1mZXRjaFwiO1xuXG5pZiAoYXBwLmlvcykge1xuICAgICAgY2xhc3MgTXlEZWxlZ2F0ZSBleHRlbmRzIFVJUmVzcG9uZGVyIGltcGxlbWVudHMgVUlBcHBsaWNhdGlvbkRlbGVnYXRlIHtcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmpDUHJvdG9jb2xzID0gW1VJQXBwbGljYXRpb25EZWxlZ2F0ZV07XG5cbiAgICAgICAgcHVibGljIGFwcGxpY2F0aW9uUGVyZm9ybUZldGNoV2l0aENvbXBsZXRpb25IYW5kbGVyKGFwcGxpY2F0aW9uOiBVSUFwcGxpY2F0aW9uLCBjb21wbGV0aW9uSGFuZGxlcjphbnkpIHtcbiAgICAgICAgICAgICAgICAgIEJhY2tncm91bmRGZXRjaC5wZXJmb3JtRmV0Y2hXaXRoQ29tcGxldGlvbkhhbmRsZXIoYXBwbGljYXRpb24sIGNvbXBsZXRpb25IYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcHAuaW9zLmRlbGVnYXRlID0gTXlEZWxlZ2F0ZTtcbiAgICB9XG5cbmZpcmViYXNlLmluaXQoe1xuICAgIHBlcnNpc3Q6IHRydWVcbn0pXG4gICAgLnRoZW4oaW5zdGFuY2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZmlyZWJhc2UuaW5pdCBkb25lJyk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICB9KTtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=