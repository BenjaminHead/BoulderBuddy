"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
var page_1 = require("tns-core-modules/ui/page");
var nativescript_directions_1 = require("nativescript-directions");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var http_1 = require("@angular/http");
var trip_service_1 = require("../../shared/trip/trip.service");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var LogBoulderComponent = /** @class */ (function () {
    function LogBoulderComponent(router, firebaseService, tripService, page, http, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.tripService = tripService;
        this.page = page;
        this.http = http;
        this.route = route;
        this.screenTouched = false;
        this.directions = new nativescript_directions_1.Directions;
        this.coords = false;
        this.boulder = {
            name: '',
            location: '',
            problems: []
        };
        this.problem = {
            grade: '',
            name: ''
        };
        this.stackLayout = page.getViewById("view");
        this.directions.available().then(function (avail) {
            console.log(avail ? "Yes" : "No");
        });
    }
    LogBoulderComponent.prototype.ngOnInit = function () {
        // this.setLatLong().then((result)=>{
        //     this.locOnLock = result;
        //     console.log("Location on lock", this.locOnLock);
        // });
    };
    // onTouch(){
    //     this.screenTouched = true;
    // }
    LogBoulderComponent.prototype.setLatLong = function () {
        this.latLong = nativescript_geolocation_1.getCurrentLocation({ desiredAccuracy: 3 }).then(function (loc) {
            if (loc) {
                var lat = JSON.stringify(loc.latitude);
                var long_1 = JSON.stringify(loc.longitude);
                var locOnLock = lat + ',' + long_1;
                return locOnLock;
            }
        }, function (e) {
            console.log("Error: " + e.message);
        });
        return this.latLong;
    };
    LogBoulderComponent.prototype.getLocation = function () {
        var _this = this;
        this.setLatLong().then(function (result) {
            _this.location = result;
            console.log("Current Location", _this.location);
        });
        // getCurrentLocation({desiredAccuracy: 3}).then((loc)=>{
        //     console.log("Current location", loc);
        //     this.location = loc;
        // })
    };
    LogBoulderComponent.prototype.addProblem = function () {
        this.boulder.problems.push(this.problem);
        console.log("Boulder problems", this.boulder.problems);
        this.recentlyAdded = this.problem.name;
    };
    // getDirections() {
    //     this.directions.navigate({
    //         from: { // optional, default 'current location'
    //             address: this.toDestination
    //         },
    //         to: [{ // if an Array is passed (as in this example), the last item is the destination, the addresses in between are 'waypoints'.
    //             address: this.fromDestination
    //         }],
    //         ios: {
    //             preferGoogleMaps: true, // If the Google Maps app is installed, use that one instead of Apple Maps, because it supports waypoints. Default true.
    //             allowGoogleMapsWeb: true // If waypoints are passed in and Google Maps is not installed, you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored), or you can open Google Maps on web so all waypoints are shown (set this property to true). Default false.
    //         }
    //     }).then(() => {
    //         console.log("Maps app launched.");
    //     }, error => {
    //         console.log(error);
    //     });
    // }
    // sendTripData(){
    //     if(!this.fromDestination){
    //         this.coords = true;
    //         this.fromDestination = this.locOnLock;
    //     }
    //     if(!this.toDestination){
    //         this.coords = true;
    //         this.toDestination = this.locOnArrival;
    //     }
    //     this.tripService.setConfigUrl(this.fromDestination, this.toDestination, this.coords);
    //     // this.tripService.setFirebaseTripUrl();
    //     this.tripData = this.tripService.showConfigResponse();
    // }
    LogBoulderComponent.prototype.logBoulder = function () {
        this.boulder.location = this.location;
        console.log("Boulder before assignments", this.boulder.problems);
        this.firebaseService.sendBoulderInfo(this.boulder, this.area);
        this.firebaseService.checkForDuplicates(this.boulder, this.area);
    };
    LogBoulderComponent = __decorate([
        core_1.Component({
            selector: "log-boulder",
            providers: [firebase_service_1.FirebaseService],
            templateUrl: "./pages/log-boulder/log-boulder.html",
            styleUrls: ["./pages/log-boulder/log-boulder-common.css", "./pages/log-boulder/log-boulder.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            trip_service_1.TripService,
            page_1.Page,
            http_1.Http,
            router_1.ActivatedRoute])
    ], LogBoulderComponent);
    return LogBoulderComponent;
}());
exports.LogBoulderComponent = LogBoulderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLWJvdWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nLWJvdWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCwyRUFBeUU7QUFFekUsMEVBQTBFO0FBQzFFLGlEQUFnRDtBQUVoRCxtRUFBcUQ7QUFHckQscUVBQXFJO0FBQ3JJLHNDQUF3RDtBQUV4RCwrREFBNkQ7QUFDN0QsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFRL0I7SUFzQkksNkJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXpCekMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFHLElBQUksb0NBQVUsQ0FBQztRQU01QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUVGLFlBQU8sR0FBRztZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFDO1FBU0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFNRCxzQ0FBUSxHQUFSO1FBQ0kscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUMvQix1REFBdUQ7UUFDdkQsTUFBTTtJQUNWLENBQUM7SUFFRCxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLElBQUk7SUFFSix3Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyw2Q0FBa0IsQ0FBQyxFQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7WUFDckUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBSSxDQUFDO2dCQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBUyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xELENBQUMsQ0FBQyxDQUFBO1FBQ0YseURBQXlEO1FBQ3pELDRDQUE0QztRQUM1QywyQkFBMkI7UUFDM0IsS0FBSztJQUNULENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQywwREFBMEQ7SUFDMUQsMENBQTBDO0lBQzFDLGFBQWE7SUFDYiw0SUFBNEk7SUFDNUksNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsK0pBQStKO0lBQy9KLHdUQUF3VDtJQUN4VCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDZDQUE2QztJQUM3QyxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixJQUFJO0lBRUosa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsaURBQWlEO0lBQ2pELFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGtEQUFrRDtJQUNsRCxRQUFRO0lBQ1IsNEZBQTRGO0lBQzVGLGdEQUFnRDtJQUNoRCw2REFBNkQ7SUFDN0QsSUFBSTtJQUVKLHdDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUF2SFEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzVCLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsNENBQTRDLEVBQUUscUNBQXFDLENBQUM7U0FDbkcsQ0FBQzt5Q0F1QjhCLGVBQU07WUFDRyxrQ0FBZTtZQUNuQiwwQkFBVztZQUNsQixXQUFJO1lBQ0osV0FBSTtZQUNILHVCQUFjO09BM0JoQyxtQkFBbUIsQ0F5SS9CO0lBQUQsMEJBQUM7Q0FBQSxBQXpJRCxJQXlJQztBQXpJWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbi8vIGltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgRGlyZWN0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbiwgZGlzdGFuY2UsIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsb2ctYm91bGRlclwiLFxuICAgIHByb3ZpZGVyczogW0ZpcmViYXNlU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2ctYm91bGRlci9sb2ctYm91bGRlci5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2xvZy1ib3VsZGVyL2xvZy1ib3VsZGVyLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL2xvZy1ib3VsZGVyL2xvZy1ib3VsZGVyLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dCb3VsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHNjcmVlblRvdWNoZWQgPSBmYWxzZTtcbiAgICBzdGFja0xheW91dDtcbiAgICBkaXJlY3Rpb25zID0gbmV3IERpcmVjdGlvbnM7XG4gICAgbG9jYXRpb247XG4gICAgdXNlcjtcbiAgICBhcmVhO1xuICAgIHJlY2VudGx5QWRkZWQ7XG5cbiAgICBjb29yZHMgPSBmYWxzZTtcbiAgICBib3VsZGVyID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICBwcm9ibGVtczogW11cbiAgICB9O1xuXG4gICAgcHJvYmxlbSA9IHtcbiAgICAgICAgZ3JhZGU6ICcnLFxuICAgICAgICBuYW1lOiAnJ1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLnN0YWNrTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInZpZXdcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGF2YWlsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvY09uTG9jazogYW55O1xuICAgIGxvY09uQXJyaXZhbDogYW55O1xuICAgIGxhdExvbmc7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gdGhpcy5zZXRMYXRMb25nKCkudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAvLyAgICAgdGhpcy5sb2NPbkxvY2sgPSByZXN1bHQ7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIG9uIGxvY2tcIiwgdGhpcy5sb2NPbkxvY2spO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICAvLyBvblRvdWNoKCl7XG4gICAgLy8gICAgIHRoaXMuc2NyZWVuVG91Y2hlZCA9IHRydWU7XG4gICAgLy8gfVxuXG4gICAgc2V0TGF0TG9uZygpIHtcbiAgICAgICAgdGhpcy5sYXRMb25nID0gZ2V0Q3VycmVudExvY2F0aW9uKHtkZXNpcmVkQWNjdXJhY3k6IDN9KS50aGVuKGZ1bmN0aW9uKGxvYyl7XG4gICAgICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxhdCA9IEpTT04uc3RyaW5naWZ5KGxvYy5sYXRpdHVkZSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvbmcgPSBKU09OLnN0cmluZ2lmeShsb2MubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9jT25Mb2NrID0gbGF0ICsgJywnICsgbG9uZztcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jT25Mb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxhdExvbmc7XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24oKXtcbiAgICAgICAgdGhpcy5zZXRMYXRMb25nKCkudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBMb2NhdGlvblwiLCB0aGlzLmxvY2F0aW9uKVxuICAgICAgICB9KVxuICAgICAgICAvLyBnZXRDdXJyZW50TG9jYXRpb24oe2Rlc2lyZWRBY2N1cmFjeTogM30pLnRoZW4oKGxvYyk9PntcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBsb2NhdGlvblwiLCBsb2MpO1xuICAgICAgICAvLyAgICAgdGhpcy5sb2NhdGlvbiA9IGxvYztcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBhZGRQcm9ibGVtKCl7XG4gICAgICAgIHRoaXMuYm91bGRlci5wcm9ibGVtcy5wdXNoKHRoaXMucHJvYmxlbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm91bGRlciBwcm9ibGVtc1wiLCB0aGlzLmJvdWxkZXIucHJvYmxlbXMpO1xuICAgICAgICB0aGlzLnJlY2VudGx5QWRkZWQgPSB0aGlzLnByb2JsZW0ubmFtZTtcbiAgICB9XG5cbiAgICAvLyBnZXREaXJlY3Rpb25zKCkge1xuICAgIC8vICAgICB0aGlzLmRpcmVjdGlvbnMubmF2aWdhdGUoe1xuICAgIC8vICAgICAgICAgZnJvbTogeyAvLyBvcHRpb25hbCwgZGVmYXVsdCAnY3VycmVudCBsb2NhdGlvbidcbiAgICAvLyAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnRvRGVzdGluYXRpb25cbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB0bzogW3sgLy8gaWYgYW4gQXJyYXkgaXMgcGFzc2VkIChhcyBpbiB0aGlzIGV4YW1wbGUpLCB0aGUgbGFzdCBpdGVtIGlzIHRoZSBkZXN0aW5hdGlvbiwgdGhlIGFkZHJlc3NlcyBpbiBiZXR3ZWVuIGFyZSAnd2F5cG9pbnRzJy5cbiAgICAvLyAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmZyb21EZXN0aW5hdGlvblxuICAgIC8vICAgICAgICAgfV0sXG4gICAgLy8gICAgICAgICBpb3M6IHtcbiAgICAvLyAgICAgICAgICAgICBwcmVmZXJHb29nbGVNYXBzOiB0cnVlLCAvLyBJZiB0aGUgR29vZ2xlIE1hcHMgYXBwIGlzIGluc3RhbGxlZCwgdXNlIHRoYXQgb25lIGluc3RlYWQgb2YgQXBwbGUgTWFwcywgYmVjYXVzZSBpdCBzdXBwb3J0cyB3YXlwb2ludHMuIERlZmF1bHQgdHJ1ZS5cbiAgICAvLyAgICAgICAgICAgICBhbGxvd0dvb2dsZU1hcHNXZWI6IHRydWUgLy8gSWYgd2F5cG9pbnRzIGFyZSBwYXNzZWQgaW4gYW5kIEdvb2dsZSBNYXBzIGlzIG5vdCBpbnN0YWxsZWQsIHlvdSBjYW4gZWl0aGVyIG9wZW4gQXBwbGUgTWFwcyBhbmQgdGhlIGZpcnN0IHdheXBvaW50IGlzIHVzZWQgYXMgdGhlIHRvLWFkZHJlc3MgKHRoZSByZXN0IGlzIGlnbm9yZWQpLCBvciB5b3UgY2FuIG9wZW4gR29vZ2xlIE1hcHMgb24gd2ViIHNvIGFsbCB3YXlwb2ludHMgYXJlIHNob3duIChzZXQgdGhpcyBwcm9wZXJ0eSB0byB0cnVlKS4gRGVmYXVsdCBmYWxzZS5cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAvLyAgICAgfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBzZW5kVHJpcERhdGEoKXtcbiAgICAvLyAgICAgaWYoIXRoaXMuZnJvbURlc3RpbmF0aW9uKXtcbiAgICAvLyAgICAgICAgIHRoaXMuY29vcmRzID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuZnJvbURlc3RpbmF0aW9uID0gdGhpcy5sb2NPbkxvY2s7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYoIXRoaXMudG9EZXN0aW5hdGlvbil7XG4gICAgLy8gICAgICAgICB0aGlzLmNvb3JkcyA9IHRydWU7XG4gICAgLy8gICAgICAgICB0aGlzLnRvRGVzdGluYXRpb24gPSB0aGlzLmxvY09uQXJyaXZhbDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLnRyaXBTZXJ2aWNlLnNldENvbmZpZ1VybCh0aGlzLmZyb21EZXN0aW5hdGlvbiwgdGhpcy50b0Rlc3RpbmF0aW9uLCB0aGlzLmNvb3Jkcyk7XG4gICAgLy8gICAgIC8vIHRoaXMudHJpcFNlcnZpY2Uuc2V0RmlyZWJhc2VUcmlwVXJsKCk7XG4gICAgLy8gICAgIHRoaXMudHJpcERhdGEgPSB0aGlzLnRyaXBTZXJ2aWNlLnNob3dDb25maWdSZXNwb25zZSgpO1xuICAgIC8vIH1cblxuICAgIGxvZ0JvdWxkZXIoKSB7XG4gICAgICAgIHRoaXMuYm91bGRlci5sb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm91bGRlciBiZWZvcmUgYXNzaWdubWVudHNcIiwgdGhpcy5ib3VsZGVyLnByb2JsZW1zKTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2VuZEJvdWxkZXJJbmZvKHRoaXMuYm91bGRlciwgdGhpcy5hcmVhKTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuY2hlY2tGb3JEdXBsaWNhdGVzKHRoaXMuYm91bGRlciwgdGhpcy5hcmVhKTtcbiAgICB9XG5cbiAgICAvLyBuYXZpZ2F0ZSgpIHtcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25hdmlnYXRpb25cIl0pO1xuICAgIC8vIH1cblxuICAgIC8vIGFycml2ZWQoKSB7XG4gICAgLy8gICAgIGlmKCF0aGlzLmZyb21EZXN0aW5hdGlvbiB8fCB0aGlzLmZyb21EZXN0aW5hdGlvbiA9PT0gJycpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0TGF0TG9uZygpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxvY09uQXJyaXZhbCA9IHJlc3VsdDtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIG9uIGFycml2YWxcIiwgcmVzdWx0KTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNlbmRUcmlwRGF0YSgpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLnNlbmRUcmlwRGF0YSgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90aGFua3NcIl0pO1xuICAgIC8vIH1cbn0iXX0=