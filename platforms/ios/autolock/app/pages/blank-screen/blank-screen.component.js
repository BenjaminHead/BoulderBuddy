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
    BlankScreenComponent.prototype.sendTripData = function () {
        this.tripService.setConfigUrl(this.fromDestination, this.toDestination);
        this.tripData = this.tripService.showConfigResponse(this.user);
    };
    BlankScreenComponent.prototype.getTripData = function () {
        return this.firebaseService.getTripInfo();
    };
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        this.sendTripData();
        this.recentTrip = this.getTripData();
        console.log("Trip data is here...", JSON.stringify(this.recentTrip));
        this.router.navigate(["/thanks"], { queryParams: {
                'trip': this.recentTrip
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQUdyRCxzQ0FBd0Q7QUFFeEQsK0RBQTZEO0FBQzdELG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBTy9CO0lBV0ksOEJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWR6QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQUcsSUFBSSxvQ0FBVSxDQUFDO1FBY3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLCtDQUErQztRQUMvQyxrQ0FBa0M7UUFDbEMsNENBQTRDO1FBQzVDLE1BQU07UUFDTixrQkFBa0I7UUFDbEIsa0RBQWtEO1FBQ2xELElBQUk7SUFDUixDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxjQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTthQUM5QjtZQUNELEVBQUUsRUFBRSxDQUFDO29CQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDaEMsQ0FBQztZQUNGLEdBQUcsRUFBRTtnQkFDRCxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ1JBQWdSO2FBQzVTO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFO2dCQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDMUI7U0FDSixDQUFDLENBQUM7SUFFUCxDQUFDO0lBaEZRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSx1Q0FBdUMsQ0FBQztTQUN2RyxDQUFDO3lDQVk4QixlQUFNO1lBQ0csa0NBQWU7WUFDbkIsMEJBQVc7WUFDbEIsV0FBSTtZQUNKLFdBQUk7WUFDSCx1QkFBYztPQWhCaEMsb0JBQW9CLENBaUZoQztJQUFELDJCQUFDO0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyBpbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IERpcmVjdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRpcmVjdGlvbnNcIjtcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImJsYW5rLXNjcmVlblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2JsYW5rLXNjcmVlbi9ibGFuay1zY3JlZW4tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQmxhbmtTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc2NyZWVuVG91Y2hlZCA9IGZhbHNlO1xuICAgIHN0YWNrTGF5b3V0O1xuICAgIGRpcmVjdGlvbnMgPSBuZXcgRGlyZWN0aW9ucztcbiAgICB0b0Rlc3RpbmF0aW9uO1xuICAgIGZyb21EZXN0aW5hdGlvbjtcbiAgICB0cmlwRGF0YTtcbiAgICByZWNlbnRUcmlwO1xuICAgIHVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLnN0YWNrTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInZpZXdcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGF2YWlsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy51c2VyID0gcGFyYW1zWyd1c2VyJ107XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaXMuLi5cIiwgdGhpcy51c2VyKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGlmKCF0aGlzLnVzZXIpe1xuICAgICAgICAvLyAgICAgdGhpcy51c2VyID0gdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgb25Ub3VjaCgpe1xuICAgICAgICB0aGlzLnNjcmVlblRvdWNoZWQgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3RoaXMuc2NyZWVuVG91Y2hlZCA9IGZhbHNlO30sIDEwMDAwKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMubmF2aWdhdGUoe1xuICAgICAgICAgICAgZnJvbTogeyAvLyBvcHRpb25hbCwgZGVmYXVsdCAnY3VycmVudCBsb2NhdGlvbidcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnRvRGVzdGluYXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0bzogW3sgLy8gaWYgYW4gQXJyYXkgaXMgcGFzc2VkIChhcyBpbiB0aGlzIGV4YW1wbGUpLCB0aGUgbGFzdCBpdGVtIGlzIHRoZSBkZXN0aW5hdGlvbiwgdGhlIGFkZHJlc3NlcyBpbiBiZXR3ZWVuIGFyZSAnd2F5cG9pbnRzJy5cbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmZyb21EZXN0aW5hdGlvblxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBpb3M6IHtcbiAgICAgICAgICAgICAgICBwcmVmZXJHb29nbGVNYXBzOiB0cnVlLCAvLyBJZiB0aGUgR29vZ2xlIE1hcHMgYXBwIGlzIGluc3RhbGxlZCwgdXNlIHRoYXQgb25lIGluc3RlYWQgb2YgQXBwbGUgTWFwcywgYmVjYXVzZSBpdCBzdXBwb3J0cyB3YXlwb2ludHMuIERlZmF1bHQgdHJ1ZS5cbiAgICAgICAgICAgICAgICBhbGxvd0dvb2dsZU1hcHNXZWI6IHRydWUgLy8gSWYgd2F5cG9pbnRzIGFyZSBwYXNzZWQgaW4gYW5kIEdvb2dsZSBNYXBzIGlzIG5vdCBpbnN0YWxsZWQsIHlvdSBjYW4gZWl0aGVyIG9wZW4gQXBwbGUgTWFwcyBhbmQgdGhlIGZpcnN0IHdheXBvaW50IGlzIHVzZWQgYXMgdGhlIHRvLWFkZHJlc3MgKHRoZSByZXN0IGlzIGlnbm9yZWQpLCBvciB5b3UgY2FuIG9wZW4gR29vZ2xlIE1hcHMgb24gd2ViIHNvIGFsbCB3YXlwb2ludHMgYXJlIHNob3duIChzZXQgdGhpcyBwcm9wZXJ0eSB0byB0cnVlKS4gRGVmYXVsdCBmYWxzZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kVHJpcERhdGEoKXtcbiAgICAgICAgdGhpcy50cmlwU2VydmljZS5zZXRDb25maWdVcmwodGhpcy5mcm9tRGVzdGluYXRpb24sIHRoaXMudG9EZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMudHJpcERhdGEgPSB0aGlzLnRyaXBTZXJ2aWNlLnNob3dDb25maWdSZXNwb25zZSh0aGlzLnVzZXIpO1xuICAgIH1cblxuICAgIGdldFRyaXBEYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRUcmlwSW5mbygpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmF2aWdhdGlvblwiXSk7XG4gICAgfVxuXG4gICAgYXJyaXZlZCgpIHtcbiAgICAgICAgdGhpcy5zZW5kVHJpcERhdGEoKTtcbiAgICAgICAgdGhpcy5yZWNlbnRUcmlwID0gdGhpcy5nZXRUcmlwRGF0YSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcmlwIGRhdGEgaXMgaGVyZS4uLlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnJlY2VudFRyaXApKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90aGFua3NcIl0sIHtxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgICd0cmlwJzogdGhpcy5yZWNlbnRUcmlwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxufSJdfQ==