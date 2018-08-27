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
        console.log("Boulder before assignments", this.boulder);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLWJvdWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nLWJvdWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCwyRUFBeUU7QUFFekUsMEVBQTBFO0FBQzFFLGlEQUFnRDtBQUVoRCxtRUFBcUQ7QUFHckQscUVBQXFJO0FBQ3JJLHNDQUF3RDtBQUV4RCwrREFBNkQ7QUFDN0QsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFRL0I7SUFxQkksNkJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXhCekMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFHLElBQUksb0NBQVUsQ0FBQztRQU01QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHO1lBQ04sUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFFRixZQUFPLEdBQUc7WUFDTixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQVNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFD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O1lBQ0osV0FBSTtZQUNILHVCQUFjO09BMUJoQyxtQkFBbUIsQ0FvSS9CO0lBQUQsMEJBQUM7Q0FBQSxBQXBJRCxJQW9JQztBQXBJWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbi8vIGltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgRGlyZWN0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbiwgZGlzdGFuY2UsIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsb2ctYm91bGRlclwiLFxuICAgIHByb3ZpZGVyczogW0ZpcmViYXNlU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2ctYm91bGRlci9sb2ctYm91bGRlci5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2xvZy1ib3VsZGVyL2xvZy1ib3VsZGVyLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL2xvZy1ib3VsZGVyL2xvZy1ib3VsZGVyLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dCb3VsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHNjcmVlblRvdWNoZWQgPSBmYWxzZTtcbiAgICBzdGFja0xheW91dDtcbiAgICBkaXJlY3Rpb25zID0gbmV3IERpcmVjdGlvbnM7XG4gICAgbG9jYXRpb247XG4gICAgdHJpcERhdGE7XG4gICAgcmVjZW50VHJpcDtcbiAgICB1c2VyO1xuXG4gICAgY29vcmRzID0gZmFsc2U7XG4gICAgYm91bGRlciA9IHtcbiAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICBwcm9ibGVtczogW11cbiAgICB9O1xuXG4gICAgcHJvYmxlbSA9IHtcbiAgICAgICAgZ3JhZGU6ICcnLFxuICAgICAgICBuYW1lOiAnJ1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLnN0YWNrTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInZpZXdcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGF2YWlsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvY09uTG9jazogYW55O1xuICAgIGxvY09uQXJyaXZhbDogYW55O1xuICAgIGxhdExvbmc7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gdGhpcy5zZXRMYXRMb25nKCkudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAvLyAgICAgdGhpcy5sb2NPbkxvY2sgPSByZXN1bHQ7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIG9uIGxvY2tcIiwgdGhpcy5sb2NPbkxvY2spO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICAvLyBvblRvdWNoKCl7XG4gICAgLy8gICAgIHRoaXMuc2NyZWVuVG91Y2hlZCA9IHRydWU7XG4gICAgLy8gfVxuXG4gICAgc2V0TGF0TG9uZygpIHtcbiAgICAgICAgdGhpcy5sYXRMb25nID0gZ2V0Q3VycmVudExvY2F0aW9uKHtkZXNpcmVkQWNjdXJhY3k6IDN9KS50aGVuKGZ1bmN0aW9uKGxvYyl7XG4gICAgICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxhdCA9IEpTT04uc3RyaW5naWZ5KGxvYy5sYXRpdHVkZSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvbmcgPSBKU09OLnN0cmluZ2lmeShsb2MubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9jT25Mb2NrID0gbGF0ICsgJywnICsgbG9uZztcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jT25Mb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxhdExvbmc7XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24oKXtcbiAgICAgICAgdGhpcy5zZXRMYXRMb25nKCkudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBMb2NhdGlvblwiLCB0aGlzLmxvY2F0aW9uKVxuICAgICAgICB9KVxuICAgICAgICAvLyBnZXRDdXJyZW50TG9jYXRpb24oe2Rlc2lyZWRBY2N1cmFjeTogM30pLnRoZW4oKGxvYyk9PntcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBsb2NhdGlvblwiLCBsb2MpO1xuICAgICAgICAvLyAgICAgdGhpcy5sb2NhdGlvbiA9IGxvYztcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBhZGRQcm9ibGVtKCl7XG4gICAgICAgIHRoaXMuYm91bGRlci5wcm9ibGVtcy5wdXNoKHRoaXMucHJvYmxlbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm91bGRlciBwcm9ibGVtc1wiLCB0aGlzLmJvdWxkZXIucHJvYmxlbXMpO1xuICAgIH1cblxuICAgIC8vIGdldERpcmVjdGlvbnMoKSB7XG4gICAgLy8gICAgIHRoaXMuZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4gICAgLy8gICAgICAgICBmcm9tOiB7IC8vIG9wdGlvbmFsLCBkZWZhdWx0ICdjdXJyZW50IGxvY2F0aW9uJ1xuICAgIC8vICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMudG9EZXN0aW5hdGlvblxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHRvOiBbeyAvLyBpZiBhbiBBcnJheSBpcyBwYXNzZWQgKGFzIGluIHRoaXMgZXhhbXBsZSksIHRoZSBsYXN0IGl0ZW0gaXMgdGhlIGRlc3RpbmF0aW9uLCB0aGUgYWRkcmVzc2VzIGluIGJldHdlZW4gYXJlICd3YXlwb2ludHMnLlxuICAgIC8vICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuZnJvbURlc3RpbmF0aW9uXG4gICAgLy8gICAgICAgICB9XSxcbiAgICAvLyAgICAgICAgIGlvczoge1xuICAgIC8vICAgICAgICAgICAgIHByZWZlckdvb2dsZU1hcHM6IHRydWUsIC8vIElmIHRoZSBHb29nbGUgTWFwcyBhcHAgaXMgaW5zdGFsbGVkLCB1c2UgdGhhdCBvbmUgaW5zdGVhZCBvZiBBcHBsZSBNYXBzLCBiZWNhdXNlIGl0IHN1cHBvcnRzIHdheXBvaW50cy4gRGVmYXVsdCB0cnVlLlxuICAgIC8vICAgICAgICAgICAgIGFsbG93R29vZ2xlTWFwc1dlYjogdHJ1ZSAvLyBJZiB3YXlwb2ludHMgYXJlIHBhc3NlZCBpbiBhbmQgR29vZ2xlIE1hcHMgaXMgbm90IGluc3RhbGxlZCwgeW91IGNhbiBlaXRoZXIgb3BlbiBBcHBsZSBNYXBzIGFuZCB0aGUgZmlyc3Qgd2F5cG9pbnQgaXMgdXNlZCBhcyB0aGUgdG8tYWRkcmVzcyAodGhlIHJlc3QgaXMgaWdub3JlZCksIG9yIHlvdSBjYW4gb3BlbiBHb29nbGUgTWFwcyBvbiB3ZWIgc28gYWxsIHdheXBvaW50cyBhcmUgc2hvd24gKHNldCB0aGlzIHByb3BlcnR5IHRvIHRydWUpLiBEZWZhdWx0IGZhbHNlLlxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuICAgIC8vICAgICB9LCBlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIHNlbmRUcmlwRGF0YSgpe1xuICAgIC8vICAgICBpZighdGhpcy5mcm9tRGVzdGluYXRpb24pe1xuICAgIC8vICAgICAgICAgdGhpcy5jb29yZHMgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5mcm9tRGVzdGluYXRpb24gPSB0aGlzLmxvY09uTG9jaztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZighdGhpcy50b0Rlc3RpbmF0aW9uKXtcbiAgICAvLyAgICAgICAgIHRoaXMuY29vcmRzID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMudG9EZXN0aW5hdGlvbiA9IHRoaXMubG9jT25BcnJpdmFsO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMudHJpcFNlcnZpY2Uuc2V0Q29uZmlnVXJsKHRoaXMuZnJvbURlc3RpbmF0aW9uLCB0aGlzLnRvRGVzdGluYXRpb24sIHRoaXMuY29vcmRzKTtcbiAgICAvLyAgICAgLy8gdGhpcy50cmlwU2VydmljZS5zZXRGaXJlYmFzZVRyaXBVcmwoKTtcbiAgICAvLyAgICAgdGhpcy50cmlwRGF0YSA9IHRoaXMudHJpcFNlcnZpY2Uuc2hvd0NvbmZpZ1Jlc3BvbnNlKCk7XG4gICAgLy8gfVxuXG4gICAgbG9nQm91bGRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCb3VsZGVyIGJlZm9yZSBhc3NpZ25tZW50c1wiLCB0aGlzLmJvdWxkZXIpO1xuICAgIH1cblxuICAgIC8vIG5hdmlnYXRlKCkge1xuICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmF2aWdhdGlvblwiXSk7XG4gICAgLy8gfVxuXG4gICAgLy8gYXJyaXZlZCgpIHtcbiAgICAvLyAgICAgaWYoIXRoaXMuZnJvbURlc3RpbmF0aW9uIHx8IHRoaXMuZnJvbURlc3RpbmF0aW9uID09PSAnJykge1xuICAgIC8vICAgICAgICAgdGhpcy5zZXRMYXRMb25nKCkudGhlbigocmVzdWx0KT0+e1xuICAgIC8vICAgICAgICAgICAgIHRoaXMubG9jT25BcnJpdmFsID0gcmVzdWx0O1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gb24gYXJyaXZhbFwiLCByZXN1bHQpO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2VuZFRyaXBEYXRhKCk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2VuZFRyaXBEYXRhKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3RoYW5rc1wiXSk7XG4gICAgLy8gfVxufSJdfQ==