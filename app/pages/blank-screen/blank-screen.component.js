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
        this.coords = false;
        this.stackLayout = page.getViewById("view");
        this.directions.available().then(function (avail) {
            console.log(avail ? "Yes" : "No");
        });
    }
    BlankScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setLatLong().then(function (result) {
            _this.locOnLock = result;
            console.log("Location on lock", _this.locOnLock);
        });
    };
    BlankScreenComponent.prototype.onTouch = function () {
        this.screenTouched = true;
    };
    BlankScreenComponent.prototype.setLatLong = function () {
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
        if (!this.fromDestination) {
            this.coords = true;
            this.fromDestination = this.locOnLock;
        }
        if (!this.toDestination) {
            this.coords = true;
            this.toDestination = this.locOnArrival;
        }
        this.tripService.setConfigUrl(this.fromDestination, this.toDestination, this.coords);
        // this.tripService.setFirebaseTripUrl();
        this.tripData = this.tripService.showConfigResponse();
    };
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        var _this = this;
        if (!this.fromDestination || this.fromDestination === '') {
            this.setLatLong().then(function (result) {
                _this.locOnArrival = result;
                console.log("Location on arrival", result);
                _this.sendTripData();
            });
        }
        else {
            this.sendTripData();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQUdyRCxxRUFBcUk7QUFDckksc0NBQXdEO0FBRXhELCtEQUE2RDtBQUM3RCxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQVEvQjtJQWFJLDhCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsSUFBVSxFQUNWLElBQVUsRUFDVixLQUFxQjtRQUxyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFoQnpDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBRyxJQUFJLG9DQUFVLENBQUM7UUFPNUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQVNYLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTUQsdUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUks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SUFBSSxDQUFDLGVBQWUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUMxQixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXZHUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDNUIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSx1Q0FBdUMsQ0FBQztTQUN2RyxDQUFDO3lDQWM4QixlQUFNO1lBQ0csa0NBQWU7WUFDbkIsMEJBQVc7WUFDbEIsV0FBSTtZQUNKLFdBQUk7WUFDSCx1QkFBYztPQWxCaEMsb0JBQW9CLENBd0doQztJQUFELDJCQUFDO0NBQUEsQUF4R0QsSUF3R0M7QUF4R1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyBpbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IERpcmVjdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRpcmVjdGlvbnNcIjtcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBnZXRDdXJyZW50TG9jYXRpb24sIHdhdGNoTG9jYXRpb24sIGRpc3RhbmNlLCBjbGVhcldhdGNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAuc2VydmljZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYmxhbmstc2NyZWVuXCIsXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2JsYW5rLXNjcmVlbi9ibGFuay1zY3JlZW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9ibGFuay1zY3JlZW4vYmxhbmstc2NyZWVuLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL2JsYW5rLXNjcmVlbi9ibGFuay1zY3JlZW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEJsYW5rU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHNjcmVlblRvdWNoZWQgPSBmYWxzZTtcbiAgICBzdGFja0xheW91dDtcbiAgICBkaXJlY3Rpb25zID0gbmV3IERpcmVjdGlvbnM7XG4gICAgdG9EZXN0aW5hdGlvbjtcbiAgICBmcm9tRGVzdGluYXRpb247XG4gICAgdHJpcERhdGE7XG4gICAgcmVjZW50VHJpcDtcbiAgICB1c2VyO1xuXG4gICAgY29vcmRzID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLnN0YWNrTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInZpZXdcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGF2YWlsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvY09uTG9jazogYW55O1xuICAgIGxvY09uQXJyaXZhbDogYW55O1xuICAgIGxhdExvbmc7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXRMYXRMb25nKCkudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgdGhpcy5sb2NPbkxvY2sgPSByZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIG9uIGxvY2tcIiwgdGhpcy5sb2NPbkxvY2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRvdWNoKCl7XG4gICAgICAgIHRoaXMuc2NyZWVuVG91Y2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0TGF0TG9uZygpIHtcbiAgICAgICAgdGhpcy5sYXRMb25nID0gZ2V0Q3VycmVudExvY2F0aW9uKHtkZXNpcmVkQWNjdXJhY3k6IDN9KS50aGVuKGZ1bmN0aW9uKGxvYyl7XG4gICAgICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxhdCA9IEpTT04uc3RyaW5naWZ5KGxvYy5sYXRpdHVkZSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvbmcgPSBKU09OLnN0cmluZ2lmeShsb2MubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9jT25Mb2NrID0gbGF0ICsgJywnICsgbG9uZztcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jT25Mb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxhdExvbmc7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGZyb206IHsgLy8gb3B0aW9uYWwsIGRlZmF1bHQgJ2N1cnJlbnQgbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy50b0Rlc3RpbmF0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG86IFt7IC8vIGlmIGFuIEFycmF5IGlzIHBhc3NlZCAoYXMgaW4gdGhpcyBleGFtcGxlKSwgdGhlIGxhc3QgaXRlbSBpcyB0aGUgZGVzdGluYXRpb24sIHRoZSBhZGRyZXNzZXMgaW4gYmV0d2VlbiBhcmUgJ3dheXBvaW50cycuXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5mcm9tRGVzdGluYXRpb25cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgaW9zOiB7XG4gICAgICAgICAgICAgICAgcHJlZmVyR29vZ2xlTWFwczogdHJ1ZSwgLy8gSWYgdGhlIEdvb2dsZSBNYXBzIGFwcCBpcyBpbnN0YWxsZWQsIHVzZSB0aGF0IG9uZSBpbnN0ZWFkIG9mIEFwcGxlIE1hcHMsIGJlY2F1c2UgaXQgc3VwcG9ydHMgd2F5cG9pbnRzLiBEZWZhdWx0IHRydWUuXG4gICAgICAgICAgICAgICAgYWxsb3dHb29nbGVNYXBzV2ViOiB0cnVlIC8vIElmIHdheXBvaW50cyBhcmUgcGFzc2VkIGluIGFuZCBHb29nbGUgTWFwcyBpcyBub3QgaW5zdGFsbGVkLCB5b3UgY2FuIGVpdGhlciBvcGVuIEFwcGxlIE1hcHMgYW5kIHRoZSBmaXJzdCB3YXlwb2ludCBpcyB1c2VkIGFzIHRoZSB0by1hZGRyZXNzICh0aGUgcmVzdCBpcyBpZ25vcmVkKSwgb3IgeW91IGNhbiBvcGVuIEdvb2dsZSBNYXBzIG9uIHdlYiBzbyBhbGwgd2F5cG9pbnRzIGFyZSBzaG93biAoc2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSkuIERlZmF1bHQgZmFsc2UuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VuZFRyaXBEYXRhKCl7XG4gICAgICAgIGlmKCF0aGlzLmZyb21EZXN0aW5hdGlvbil7XG4gICAgICAgICAgICB0aGlzLmNvb3JkcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZyb21EZXN0aW5hdGlvbiA9IHRoaXMubG9jT25Mb2NrO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnRvRGVzdGluYXRpb24pe1xuICAgICAgICAgICAgdGhpcy5jb29yZHMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50b0Rlc3RpbmF0aW9uID0gdGhpcy5sb2NPbkFycml2YWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlwU2VydmljZS5zZXRDb25maWdVcmwodGhpcy5mcm9tRGVzdGluYXRpb24sIHRoaXMudG9EZXN0aW5hdGlvbiwgdGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB0aGlzLnRyaXBTZXJ2aWNlLnNldEZpcmViYXNlVHJpcFVybCgpO1xuICAgICAgICB0aGlzLnRyaXBEYXRhID0gdGhpcy50cmlwU2VydmljZS5zaG93Q29uZmlnUmVzcG9uc2UoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25hdmlnYXRpb25cIl0pO1xuICAgIH1cblxuICAgIGFycml2ZWQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmZyb21EZXN0aW5hdGlvbiB8fCB0aGlzLmZyb21EZXN0aW5hdGlvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGF0TG9uZygpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmxvY09uQXJyaXZhbCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIG9uIGFycml2YWxcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRUcmlwRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRUcmlwRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90aGFua3NcIl0pO1xuICAgIH1cbn0iXX0=