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
        this.tripData = this.tripService.showConfigResponse();
    };
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        this.sendTripData();
        this.router.navigate(["/thanks"]);
    };
    BlankScreenComponent = __decorate([
        core_1.Component({
            selector: "blank-screen",
            providers: [firebase_service_1.FirebaseService],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQUdyRCxzQ0FBd0Q7QUFFeEQsK0RBQTZEO0FBQzdELG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBUS9CO0lBV0ksOEJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWR6QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQUcsSUFBSSxvQ0FBVSxDQUFDO1FBY3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLCtDQUErQztRQUMvQyxrQ0FBa0M7UUFDbEMsNENBQTRDO1FBQzVDLE1BQU07UUFDTixrQkFBa0I7UUFDbEIsa0RBQWtEO1FBQ2xELElBQUk7SUFDUixDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTthQUM5QjtZQUNELEVBQUUsRUFBRSxDQUFDO29CQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDaEMsQ0FBQztZQUNGLEdBQUcsRUFBRTtnQkFDRCxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ1JBQWdSO2FBQzVTO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFyRVEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzVCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsOENBQThDLEVBQUUsdUNBQXVDLENBQUM7U0FDdkcsQ0FBQzt5Q0FZOEIsZUFBTTtZQUNHLGtDQUFlO1lBQ25CLDBCQUFXO1lBQ2xCLFdBQUk7WUFDSixXQUFJO1lBQ0gsdUJBQWM7T0FoQmhDLG9CQUFvQixDQXNFaEM7SUFBRCwyQkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBEaXJlY3Rpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCI7XG5pbXBvcnQgeyBNYXBWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJibGFuay1zY3JlZW5cIixcbiAgICBwcm92aWRlcnM6IFtGaXJlYmFzZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2JsYW5rLXNjcmVlbi9ibGFuay1zY3JlZW4tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQmxhbmtTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc2NyZWVuVG91Y2hlZCA9IGZhbHNlO1xuICAgIHN0YWNrTGF5b3V0O1xuICAgIGRpcmVjdGlvbnMgPSBuZXcgRGlyZWN0aW9ucztcbiAgICB0b0Rlc3RpbmF0aW9uO1xuICAgIGZyb21EZXN0aW5hdGlvbjtcbiAgICB0cmlwRGF0YTtcbiAgICByZWNlbnRUcmlwO1xuICAgIHVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLnN0YWNrTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInZpZXdcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGF2YWlsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy51c2VyID0gcGFyYW1zWyd1c2VyJ107XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaXMuLi5cIiwgdGhpcy51c2VyKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGlmKCF0aGlzLnVzZXIpe1xuICAgICAgICAvLyAgICAgdGhpcy51c2VyID0gdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgb25Ub3VjaCgpe1xuICAgICAgICB0aGlzLnNjcmVlblRvdWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBmcm9tOiB7IC8vIG9wdGlvbmFsLCBkZWZhdWx0ICdjdXJyZW50IGxvY2F0aW9uJ1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMudG9EZXN0aW5hdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvOiBbeyAvLyBpZiBhbiBBcnJheSBpcyBwYXNzZWQgKGFzIGluIHRoaXMgZXhhbXBsZSksIHRoZSBsYXN0IGl0ZW0gaXMgdGhlIGRlc3RpbmF0aW9uLCB0aGUgYWRkcmVzc2VzIGluIGJldHdlZW4gYXJlICd3YXlwb2ludHMnLlxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuZnJvbURlc3RpbmF0aW9uXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgIHByZWZlckdvb2dsZU1hcHM6IHRydWUsIC8vIElmIHRoZSBHb29nbGUgTWFwcyBhcHAgaXMgaW5zdGFsbGVkLCB1c2UgdGhhdCBvbmUgaW5zdGVhZCBvZiBBcHBsZSBNYXBzLCBiZWNhdXNlIGl0IHN1cHBvcnRzIHdheXBvaW50cy4gRGVmYXVsdCB0cnVlLlxuICAgICAgICAgICAgICAgIGFsbG93R29vZ2xlTWFwc1dlYjogdHJ1ZSAvLyBJZiB3YXlwb2ludHMgYXJlIHBhc3NlZCBpbiBhbmQgR29vZ2xlIE1hcHMgaXMgbm90IGluc3RhbGxlZCwgeW91IGNhbiBlaXRoZXIgb3BlbiBBcHBsZSBNYXBzIGFuZCB0aGUgZmlyc3Qgd2F5cG9pbnQgaXMgdXNlZCBhcyB0aGUgdG8tYWRkcmVzcyAodGhlIHJlc3QgaXMgaWdub3JlZCksIG9yIHlvdSBjYW4gb3BlbiBHb29nbGUgTWFwcyBvbiB3ZWIgc28gYWxsIHdheXBvaW50cyBhcmUgc2hvd24gKHNldCB0aGlzIHByb3BlcnR5IHRvIHRydWUpLiBEZWZhdWx0IGZhbHNlLlxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbmRUcmlwRGF0YSgpe1xuICAgICAgICB0aGlzLnRyaXBTZXJ2aWNlLnNldENvbmZpZ1VybCh0aGlzLmZyb21EZXN0aW5hdGlvbiwgdGhpcy50b0Rlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy50cmlwRGF0YSA9IHRoaXMudHJpcFNlcnZpY2Uuc2hvd0NvbmZpZ1Jlc3BvbnNlKCk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uYXZpZ2F0aW9uXCJdKTtcbiAgICB9XG5cbiAgICBhcnJpdmVkKCkge1xuICAgICAgICB0aGlzLnNlbmRUcmlwRGF0YSgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGhhbmtzXCJdKTtcbiAgICB9XG59Il19