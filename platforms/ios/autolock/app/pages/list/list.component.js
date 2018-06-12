"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_background_geolocation_lt_1 = require("nativescript-background-geolocation-lt");
var router_1 = require("@angular/router");
var trip_service_1 = require("../../shared/trip/trip.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(router, tripService) {
        this.router = router;
        this.tripService = tripService;
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
        // this.router.navigate(["/blank"]);
    };
    ListComponent.prototype.logTrip = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.setConfig({ logLevel: nativescript_background_geolocation_lt_1.BackgroundGeolocation.LOG_LEVEL_VERBOSE, function: function () {
                console.log("Changed logLevel success");
            } });
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.getLog(function (log) {
            console.log(log);
        });
        this.tripService.sendLocationData();
    };
    ListComponent.prototype.stopTracking = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.stop();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            providers: [trip_service_1.TripService],
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            trip_service_1.TripService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpR0FBNkU7QUFDN0UsMENBQXlDO0FBQ3pDLCtEQUE2RDtBQVM3RDtJQUNJLHVCQUFvQixNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxxQ0FBYSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLDhEQUFxQixDQUFDLFNBQVMsQ0FBQztZQUM1QixHQUFHLEVBQUUseUNBQXlDO1lBQzlDLGdCQUFnQixFQUFFLEdBQUc7WUFDckIsZUFBZSxFQUFFLENBQUM7WUFDbEIsY0FBYyxFQUFFLENBQUM7WUFDakIsY0FBYyxFQUFFLElBQUk7WUFDcEIsaUJBQWlCLEVBQUUsRUFBRTtTQUN4QixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsOERBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLDhEQUFxQixDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSw4REFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRO2dCQUN4RixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDNUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNKLDhEQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFTLEdBQUc7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLDhEQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFoQ1EsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO1NBQ2pELENBQUM7eUNBRThCLGVBQU07WUFDRCwwQkFBVztPQUZuQyxhQUFhLENBa0N6QjtJQUFELG9CQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgICBwcm92aWRlcnM6IFtUcmlwU2VydmljZV0sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UpIHt9XG5cbiAgICBzdGFydFRyYWNraW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uIGVudGVyZWQuLi5cIik7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5jb25maWd1cmUoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hbW9yYS0yY2M0Yy5maXJlYmFzZWlvLmNvbS90cmlwJyxcbiAgICAgICAgICAgIGh0dHBSb290UHJvcGVydHk6ICcuJyxcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMCxcbiAgICAgICAgICAgIGRpc3RhbmNlRmlsdGVyOiA1LFxuICAgICAgICAgICAgcHJldmVudFN1c3BlbmQ6IHRydWUsXG4gICAgICAgICAgICBoZWFydGJlYXRJbnRlcnZhbDogNjBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmVnaW4gdHJhY2tpbmdcIik7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdyBuYXZpZ2F0ZSB0b1wiKTtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JsYW5rXCJdKTtcbiAgICB9XG5cbiAgICBsb2dUcmlwKCkge1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uc2V0Q29uZmlnKHtsb2dMZXZlbDogQmFja2dyb3VuZEdlb2xvY2F0aW9uLkxPR19MRVZFTF9WRVJCT1NFLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZCBsb2dMZXZlbCBzdWNjZXNzXCIpO1xuICAgICAgICB9fSk7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5nZXRMb2coZnVuY3Rpb24obG9nKXtcbiAgICAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHJpcFNlcnZpY2Uuc2VuZExvY2F0aW9uRGF0YSgpO1xuICAgIH1cblxuICAgIHN0b3BUcmFja2luZygpIHtcbiAgICAgICAgQmFja2dyb3VuZEdlb2xvY2F0aW9uLnN0b3AoKTtcbiAgICB9XG5cbn0iXX0=