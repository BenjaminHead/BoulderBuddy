"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_background_geolocation_lt_1 = require("nativescript-background-geolocation-lt");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.user = this.firebaseService.getUser();
        this.tripInfo = {
            odometer: 5,
            tripTime: 10
        };
    }
    ListComponent.prototype.startTracking = function () {
        console.log("Function entered...");
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.configure({
            url: 'https://amora-2cc4c.firebaseio.com/trip',
            httpRootProperty: '.',
            desiredAccuracy: 0,
            distanceFilter: 5,
            preventSuspend: true,
            heartbeatInterval: 60
        });
        console.log("Begin tracking");
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.start();
        console.log("Now navigate to");
        this.router.navigate(["/blank"]);
    };
    ListComponent.prototype.logTrip = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.setConfig({ logLevel: nativescript_background_geolocation_lt_1.BackgroundGeolocation.LOG_LEVEL_VERBOSE, function: function () {
                console.log("Changed logLevel success");
            } });
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.getLog(function (log) {
            console.log(log);
        });
        this.firebaseService.sendTripInfo(this.user, this.tripInfo);
    };
    ListComponent.prototype.stopTracking = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.stop();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            providers: [firebase_service_1.FirebaseService],
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpR0FBNkU7QUFDN0UsMENBQXlDO0FBQ3pDLDJFQUF5RTtBQVN6RTtJQUtJLHVCQUFvQixNQUFjLEVBQ2QsZUFBZ0M7UUFEaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFBO0lBQ0wsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsOERBQXFCLENBQUMsU0FBUyxDQUFDO1lBQzVCLEdBQUcsRUFBRSx5Q0FBeUM7WUFDOUMsZ0JBQWdCLEVBQUUsR0FBRztZQUNyQixlQUFlLEVBQUUsQ0FBQztZQUNsQixjQUFjLEVBQUUsQ0FBQztZQUNqQixjQUFjLEVBQUUsSUFBSTtZQUNwQixpQkFBaUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5Qiw4REFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0ksOERBQXFCLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLDhEQUFxQixDQUFDLGlCQUFpQixFQUFFLFFBQVE7Z0JBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUM1QyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ0osOERBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVMsR0FBRztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSw4REFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBMUNRLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztTQUNqRCxDQUFDO3lDQU04QixlQUFNO1lBQ0csa0NBQWU7T0FOM0MsYUFBYSxDQTRDekI7SUFBRCxvQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFja2dyb3VuZEdlb2xvY2F0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtZ2VvbG9jYXRpb24tbHRcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xpc3QtY29tbW9uLmNzc1wiLCBcIi4vbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG5cbiAgICB0cmlwSW5mbztcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy50cmlwSW5mbyA9IHtcbiAgICAgICAgICAgIG9kb21ldGVyOiA1LFxuICAgICAgICAgICAgdHJpcFRpbWU6IDEwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFRyYWNraW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uIGVudGVyZWQuLi5cIik7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5jb25maWd1cmUoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hbW9yYS0yY2M0Yy5maXJlYmFzZWlvLmNvbS90cmlwJyxcbiAgICAgICAgICAgIGh0dHBSb290UHJvcGVydHk6ICcuJyxcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMCxcbiAgICAgICAgICAgIGRpc3RhbmNlRmlsdGVyOiA1LFxuICAgICAgICAgICAgcHJldmVudFN1c3BlbmQ6IHRydWUsXG4gICAgICAgICAgICBoZWFydGJlYXRJbnRlcnZhbDogNjBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmVnaW4gdHJhY2tpbmdcIik7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdyBuYXZpZ2F0ZSB0b1wiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JsYW5rXCJdKTtcbiAgICB9XG5cbiAgICBsb2dUcmlwKCkge1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uc2V0Q29uZmlnKHtsb2dMZXZlbDogQmFja2dyb3VuZEdlb2xvY2F0aW9uLkxPR19MRVZFTF9WRVJCT1NFLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZCBsb2dMZXZlbCBzdWNjZXNzXCIpO1xuICAgICAgICB9fSk7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5nZXRMb2coZnVuY3Rpb24obG9nKXtcbiAgICAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmRUcmlwSW5mbyh0aGlzLnVzZXIsIHRoaXMudHJpcEluZm8pO1xuICAgIH1cblxuICAgIHN0b3BUcmFja2luZygpIHtcbiAgICAgICAgQmFja2dyb3VuZEdlb2xvY2F0aW9uLnN0b3AoKTtcbiAgICB9XG5cbn0iXX0=