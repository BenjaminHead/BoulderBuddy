"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
var page_1 = require("tns-core-modules/ui/page");
var nativescript_directions_1 = require("nativescript-directions");
var http_1 = require("@angular/http");
var trip_service_1 = require("../../shared/trip/trip.service");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var BlankScreenComponent = /** @class */ (function () {
    function BlankScreenComponent(router, firebaseService, tripService, page, http, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.tripService = tripService;
        this.page = page;
        this.http = http;
        this.route = route;
        this.screenTouched = false;
        this.directions = new nativescript_directions_1.Directions;
        this.stackLayout = page.getViewById("view");
        this.directions.available().then(function (avail) {
            console.log(avail ? "Yes" : "No");
        });
    }
    BlankScreenComponent.prototype.ngOnInit = function () {
        // this.route.queryParams.subscribe(params => {
        //     this.user = params['user'];
        //     console.log("User is...", this.user);
        // });
        // if(!this.user){
        //     this.user = this.firebaseService.getUser();
        // }
    };
    BlankScreenComponent.prototype.onTouch = function () {
        this.screenTouched = true;
        setTimeout(function () { this.screenTouched = false; }, 10000);
    };
    BlankScreenComponent.prototype.getDirections = function () {
        this.directions.navigate({
            from: {
                address: this.toDestination
            },
            to: [{
                    address: this.fromDestination
                }],
            ios: {
                preferGoogleMaps: true,
                allowGoogleMapsWeb: true // If waypoints are passed in and Google Maps is not installed, you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored), or you can open Google Maps on web so all waypoints are shown (set this property to true). Default false.
            }
        }).then(function () {
            console.log("Maps app launched.");
        }, function (error) {
            console.log(error);
        });
    };
    BlankScreenComponent.prototype.getTripData = function () {
        this.tripService.setConfigUrl(this.fromDestination, this.toDestination);
        this.tripData = this.tripService.showConfigResponse(this.user);
        console.log("Trip data is now...", this.tripData);
    };
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        console.log("Why the fuck did this stop working?");
        this.router.navigate(["/thanks"]);
    };
    BlankScreenComponent = __decorate([
        core_1.Component({
            selector: "blank-screen",
            templateUrl: "./pages/blank-screen/blank-screen.html",
            styleUrls: ["./pages/blank-screen/blank-screen-common.css", "./pages/blank-screen/blank-screen.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            trip_service_1.TripService,
            page_1.Page,
            http_1.Http,
            router_1.ActivatedRoute])
    ], BlankScreenComponent);
    return BlankScreenComponent;
}());
exports.BlankScreenComponent = BlankScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQUdyRCxzQ0FBd0Q7QUFFeEQsK0RBQTZEO0FBQzdELG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBTy9CO0lBVUksOEJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWJ6QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQUcsSUFBSSxvQ0FBVSxDQUFDO1FBYXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLCtDQUErQztRQUMvQyxrQ0FBa0M7UUFDbEMsNENBQTRDO1FBQzVDLE1BQU07UUFDTixrQkFBa0I7UUFDbEIsa0RBQWtEO1FBQ2xELElBQUk7SUFDUixDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxjQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTthQUM5QjtZQUNELEVBQUUsRUFBRSxDQUFDO29CQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDaEMsQ0FBQztZQUNGLEdBQUcsRUFBRTtnQkFDRCxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ1JBQWdSO2FBQzVTO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXRFUSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsOENBQThDLEVBQUUsdUNBQXVDLENBQUM7U0FDdkcsQ0FBQzt5Q0FXOEIsZUFBTTtZQUNHLGtDQUFlO1lBQ25CLDBCQUFXO1lBQ2xCLFdBQUk7WUFDSixXQUFJO1lBQ0gsdUJBQWM7T0FmaEMsb0JBQW9CLENBdUVoQztJQUFELDJCQUFDO0NBQUEsQUF2RUQsSUF1RUM7QUF2RVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyBpbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IERpcmVjdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRpcmVjdGlvbnNcIjtcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImJsYW5rLXNjcmVlblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2JsYW5rLXNjcmVlbi9ibGFuay1zY3JlZW4tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQmxhbmtTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc2NyZWVuVG91Y2hlZCA9IGZhbHNlO1xuICAgIHN0YWNrTGF5b3V0O1xuICAgIGRpcmVjdGlvbnMgPSBuZXcgRGlyZWN0aW9ucztcbiAgICB0b0Rlc3RpbmF0aW9uO1xuICAgIGZyb21EZXN0aW5hdGlvbjtcbiAgICB0cmlwRGF0YTtcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdGFja0xheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ2aWV3XCIpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMuYXZhaWxhYmxlKCkudGhlbihhdmFpbCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhdmFpbCA/IFwiWWVzXCIgOiBcIk5vXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMudXNlciA9IHBhcmFtc1sndXNlciddO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJVc2VyIGlzLi4uXCIsIHRoaXMudXNlcik7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBpZighdGhpcy51c2VyKXtcbiAgICAgICAgLy8gICAgIHRoaXMudXNlciA9IHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG9uVG91Y2goKXtcbiAgICAgICAgdGhpcy5zY3JlZW5Ub3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGlzLnNjcmVlblRvdWNoZWQgPSBmYWxzZTt9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGZyb206IHsgLy8gb3B0aW9uYWwsIGRlZmF1bHQgJ2N1cnJlbnQgbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy50b0Rlc3RpbmF0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG86IFt7IC8vIGlmIGFuIEFycmF5IGlzIHBhc3NlZCAoYXMgaW4gdGhpcyBleGFtcGxlKSwgdGhlIGxhc3QgaXRlbSBpcyB0aGUgZGVzdGluYXRpb24sIHRoZSBhZGRyZXNzZXMgaW4gYmV0d2VlbiBhcmUgJ3dheXBvaW50cycuXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5mcm9tRGVzdGluYXRpb25cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgaW9zOiB7XG4gICAgICAgICAgICAgICAgcHJlZmVyR29vZ2xlTWFwczogdHJ1ZSwgLy8gSWYgdGhlIEdvb2dsZSBNYXBzIGFwcCBpcyBpbnN0YWxsZWQsIHVzZSB0aGF0IG9uZSBpbnN0ZWFkIG9mIEFwcGxlIE1hcHMsIGJlY2F1c2UgaXQgc3VwcG9ydHMgd2F5cG9pbnRzLiBEZWZhdWx0IHRydWUuXG4gICAgICAgICAgICAgICAgYWxsb3dHb29nbGVNYXBzV2ViOiB0cnVlIC8vIElmIHdheXBvaW50cyBhcmUgcGFzc2VkIGluIGFuZCBHb29nbGUgTWFwcyBpcyBub3QgaW5zdGFsbGVkLCB5b3UgY2FuIGVpdGhlciBvcGVuIEFwcGxlIE1hcHMgYW5kIHRoZSBmaXJzdCB3YXlwb2ludCBpcyB1c2VkIGFzIHRoZSB0by1hZGRyZXNzICh0aGUgcmVzdCBpcyBpZ25vcmVkKSwgb3IgeW91IGNhbiBvcGVuIEdvb2dsZSBNYXBzIG9uIHdlYiBzbyBhbGwgd2F5cG9pbnRzIGFyZSBzaG93biAoc2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSkuIERlZmF1bHQgZmFsc2UuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VHJpcERhdGEoKXtcbiAgICAgICAgdGhpcy50cmlwU2VydmljZS5zZXRDb25maWdVcmwodGhpcy5mcm9tRGVzdGluYXRpb24sIHRoaXMudG9EZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMudHJpcERhdGEgPSB0aGlzLnRyaXBTZXJ2aWNlLnNob3dDb25maWdSZXNwb25zZSh0aGlzLnVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyaXAgZGF0YSBpcyBub3cuLi5cIiwgdGhpcy50cmlwRGF0YSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uYXZpZ2F0aW9uXCJdKTtcbiAgICB9XG5cbiAgICBhcnJpdmVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldoeSB0aGUgZnVjayBkaWQgdGhpcyBzdG9wIHdvcmtpbmc/XCIpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGhhbmtzXCJdKTtcbiAgICB9XG59Il19