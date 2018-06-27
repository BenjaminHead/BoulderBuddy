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
    // getTripData(){
    //     this.tripService.setConfigUrl(this.fromDestination, this.toDestination);
    //     this.tripData = this.tripService.showConfigResponse(this.user);
    //     console.log("Trip data is now...", this.tripData);
    // }
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        this.firebaseService.getUser().then(function (result) { return function () {
            this.user = result;
            console.log("Is this returned result consistent with our model?", result);
        }; });
        this.firebaseService.getTripInfo(this.user).then(function (result) { return function () {
            this.router.navigate(["/thanks"], { queryParams: {
                    'trip': result
                }
            });
        }; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQUdyRCxzQ0FBd0Q7QUFFeEQsK0RBQTZEO0FBQzdELG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBTy9CO0lBVUksOEJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWJ6QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQUcsSUFBSSxvQ0FBVSxDQUFDO1FBYXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLCtDQUErQztRQUMvQyxrQ0FBa0M7UUFDbEMsNENBQTRDO1FBQzVDLE1BQU07UUFDTixrQkFBa0I7UUFDbEIsa0RBQWtEO1FBQ2xELElBQUk7SUFDUixDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxjQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTthQUM5QjtZQUNELEVBQUUsRUFBRSxDQUFDO29CQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDaEMsQ0FBQztZQUNGLEdBQUcsRUFBRTtnQkFDRCxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ1JBQWdSO2FBQzVTO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsK0VBQStFO0lBQy9FLHNFQUFzRTtJQUN0RSx5REFBeUQ7SUFDekQsSUFBSTtJQUVKLHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU0sSUFBRyxPQUFBO1lBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0UsQ0FBQyxFQUg2QyxDQUc3QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxJQUFHLE9BQUE7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBRTtvQkFDNUMsTUFBTSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0EsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUwwRCxDQUsxRCxDQUFDLENBQUM7SUFFUCxDQUFDO0lBL0VRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSx1Q0FBdUMsQ0FBQztTQUN2RyxDQUFDO3lDQVc4QixlQUFNO1lBQ0csa0NBQWU7WUFDbkIsMEJBQVc7WUFDbEIsV0FBSTtZQUNKLFdBQUk7WUFDSCx1QkFBYztPQWZoQyxvQkFBb0IsQ0FnRmhDO0lBQUQsMkJBQUM7Q0FBQSxBQWhGRCxJQWdGQztBQWhGWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbi8vIGltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgRGlyZWN0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAuc2VydmljZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYmxhbmstc2NyZWVuXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9ibGFuay1zY3JlZW4vYmxhbmstc2NyZWVuLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9ibGFuay1zY3JlZW4vYmxhbmstc2NyZWVuLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBCbGFua1NjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzY3JlZW5Ub3VjaGVkID0gZmFsc2U7XG4gICAgc3RhY2tMYXlvdXQ7XG4gICAgZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zO1xuICAgIHRvRGVzdGluYXRpb247XG4gICAgZnJvbURlc3RpbmF0aW9uO1xuICAgIHRyaXBEYXRhO1xuICAgIHVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLnN0YWNrTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInZpZXdcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGF2YWlsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy51c2VyID0gcGFyYW1zWyd1c2VyJ107XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaXMuLi5cIiwgdGhpcy51c2VyKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGlmKCF0aGlzLnVzZXIpe1xuICAgICAgICAvLyAgICAgdGhpcy51c2VyID0gdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgb25Ub3VjaCgpe1xuICAgICAgICB0aGlzLnNjcmVlblRvdWNoZWQgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3RoaXMuc2NyZWVuVG91Y2hlZCA9IGZhbHNlO30sIDEwMDAwKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMubmF2aWdhdGUoe1xuICAgICAgICAgICAgZnJvbTogeyAvLyBvcHRpb25hbCwgZGVmYXVsdCAnY3VycmVudCBsb2NhdGlvbidcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnRvRGVzdGluYXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0bzogW3sgLy8gaWYgYW4gQXJyYXkgaXMgcGFzc2VkIChhcyBpbiB0aGlzIGV4YW1wbGUpLCB0aGUgbGFzdCBpdGVtIGlzIHRoZSBkZXN0aW5hdGlvbiwgdGhlIGFkZHJlc3NlcyBpbiBiZXR3ZWVuIGFyZSAnd2F5cG9pbnRzJy5cbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmZyb21EZXN0aW5hdGlvblxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBpb3M6IHtcbiAgICAgICAgICAgICAgICBwcmVmZXJHb29nbGVNYXBzOiB0cnVlLCAvLyBJZiB0aGUgR29vZ2xlIE1hcHMgYXBwIGlzIGluc3RhbGxlZCwgdXNlIHRoYXQgb25lIGluc3RlYWQgb2YgQXBwbGUgTWFwcywgYmVjYXVzZSBpdCBzdXBwb3J0cyB3YXlwb2ludHMuIERlZmF1bHQgdHJ1ZS5cbiAgICAgICAgICAgICAgICBhbGxvd0dvb2dsZU1hcHNXZWI6IHRydWUgLy8gSWYgd2F5cG9pbnRzIGFyZSBwYXNzZWQgaW4gYW5kIEdvb2dsZSBNYXBzIGlzIG5vdCBpbnN0YWxsZWQsIHlvdSBjYW4gZWl0aGVyIG9wZW4gQXBwbGUgTWFwcyBhbmQgdGhlIGZpcnN0IHdheXBvaW50IGlzIHVzZWQgYXMgdGhlIHRvLWFkZHJlc3MgKHRoZSByZXN0IGlzIGlnbm9yZWQpLCBvciB5b3UgY2FuIG9wZW4gR29vZ2xlIE1hcHMgb24gd2ViIHNvIGFsbCB3YXlwb2ludHMgYXJlIHNob3duIChzZXQgdGhpcyBwcm9wZXJ0eSB0byB0cnVlKS4gRGVmYXVsdCBmYWxzZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBnZXRUcmlwRGF0YSgpe1xuICAgIC8vICAgICB0aGlzLnRyaXBTZXJ2aWNlLnNldENvbmZpZ1VybCh0aGlzLmZyb21EZXN0aW5hdGlvbiwgdGhpcy50b0Rlc3RpbmF0aW9uKTtcbiAgICAvLyAgICAgdGhpcy50cmlwRGF0YSA9IHRoaXMudHJpcFNlcnZpY2Uuc2hvd0NvbmZpZ1Jlc3BvbnNlKHRoaXMudXNlcik7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVHJpcCBkYXRhIGlzIG5vdy4uLlwiLCB0aGlzLnRyaXBEYXRhKTtcbiAgICAvLyB9XG5cbiAgICBuYXZpZ2F0ZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25hdmlnYXRpb25cIl0pO1xuICAgIH1cblxuICAgIGFycml2ZWQoKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKS50aGVuKChyZXN1bHQpPT5mdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXMgdGhpcyByZXR1cm5lZCByZXN1bHQgY29uc2lzdGVudCB3aXRoIG91ciBtb2RlbD9cIixyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VHJpcEluZm8odGhpcy51c2VyKS50aGVuKChyZXN1bHQpPT5mdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3RoYW5rc1wiXSwge3F1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgJ3RyaXAnOiByZXN1bHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbn0iXX0=