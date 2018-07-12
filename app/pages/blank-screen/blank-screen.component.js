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
        });
        console.log("Location on lock", this.locOnLock, this.setLatLong());
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
        console.log("intial values for send trip data", this.fromDestination, this.toDestination);
        if (!this.fromDestination) {
            this.coords = true;
            this.fromDestination = this.locOnLock;
        }
        if (!this.toDestination) {
            this.coords = true;
            this.toDestination = this.locOnArrival;
        }
        console.log("Origin and destination in blank screen component", this.fromDestination, this.toDestination);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQUdyRCxxRUFBcUk7QUFDckksc0NBQXdEO0FBRXhELCtEQUE2RDtBQUM3RCxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQVEvQjtJQWFJLDhCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsSUFBVSxFQUNWLElBQVUsRUFDVixLQUFxQjtRQUxyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFoQnpDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBRyxJQUFJLG9DQUFVLENBQUM7UUFPNUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQVNYLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTUQsdUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUks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SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbi8vIGltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgRGlyZWN0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbiwgZGlzdGFuY2UsIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJibGFuay1zY3JlZW5cIixcbiAgICBwcm92aWRlcnM6IFtGaXJlYmFzZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2JsYW5rLXNjcmVlbi9ibGFuay1zY3JlZW4tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvYmxhbmstc2NyZWVuL2JsYW5rLXNjcmVlbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQmxhbmtTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc2NyZWVuVG91Y2hlZCA9IGZhbHNlO1xuICAgIHN0YWNrTGF5b3V0O1xuICAgIGRpcmVjdGlvbnMgPSBuZXcgRGlyZWN0aW9ucztcbiAgICB0b0Rlc3RpbmF0aW9uO1xuICAgIGZyb21EZXN0aW5hdGlvbjtcbiAgICB0cmlwRGF0YTtcbiAgICByZWNlbnRUcmlwO1xuICAgIHVzZXI7XG5cbiAgICBjb29yZHMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3RhY2tMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwidmlld1wiKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLmF2YWlsYWJsZSgpLnRoZW4oYXZhaWwgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXZhaWwgPyBcIlllc1wiIDogXCJOb1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9jT25Mb2NrOiBhbnk7XG4gICAgbG9jT25BcnJpdmFsOiBhbnk7XG4gICAgbGF0TG9uZztcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNldExhdExvbmcoKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICB0aGlzLmxvY09uTG9jayA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gb24gbG9ja1wiLCB0aGlzLmxvY09uTG9jaywgdGhpcy5zZXRMYXRMb25nKCkpO1xuICAgIH1cblxuICAgIG9uVG91Y2goKXtcbiAgICAgICAgdGhpcy5zY3JlZW5Ub3VjaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRMYXRMb25nKCkge1xuICAgICAgICB0aGlzLmxhdExvbmcgPSBnZXRDdXJyZW50TG9jYXRpb24oe2Rlc2lyZWRBY2N1cmFjeTogM30pLnRoZW4oZnVuY3Rpb24obG9jKXtcbiAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGF0ID0gSlNPTi5zdHJpbmdpZnkobG9jLmxhdGl0dWRlKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9uZyA9IEpTT04uc3RyaW5naWZ5KGxvYy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICAgIGxldCBsb2NPbkxvY2sgPSBsYXQgKyAnLCcgKyBsb25nO1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2NPbkxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF0TG9uZztcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMubmF2aWdhdGUoe1xuICAgICAgICAgICAgZnJvbTogeyAvLyBvcHRpb25hbCwgZGVmYXVsdCAnY3VycmVudCBsb2NhdGlvbidcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnRvRGVzdGluYXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0bzogW3sgLy8gaWYgYW4gQXJyYXkgaXMgcGFzc2VkIChhcyBpbiB0aGlzIGV4YW1wbGUpLCB0aGUgbGFzdCBpdGVtIGlzIHRoZSBkZXN0aW5hdGlvbiwgdGhlIGFkZHJlc3NlcyBpbiBiZXR3ZWVuIGFyZSAnd2F5cG9pbnRzJy5cbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmZyb21EZXN0aW5hdGlvblxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBpb3M6IHtcbiAgICAgICAgICAgICAgICBwcmVmZXJHb29nbGVNYXBzOiB0cnVlLCAvLyBJZiB0aGUgR29vZ2xlIE1hcHMgYXBwIGlzIGluc3RhbGxlZCwgdXNlIHRoYXQgb25lIGluc3RlYWQgb2YgQXBwbGUgTWFwcywgYmVjYXVzZSBpdCBzdXBwb3J0cyB3YXlwb2ludHMuIERlZmF1bHQgdHJ1ZS5cbiAgICAgICAgICAgICAgICBhbGxvd0dvb2dsZU1hcHNXZWI6IHRydWUgLy8gSWYgd2F5cG9pbnRzIGFyZSBwYXNzZWQgaW4gYW5kIEdvb2dsZSBNYXBzIGlzIG5vdCBpbnN0YWxsZWQsIHlvdSBjYW4gZWl0aGVyIG9wZW4gQXBwbGUgTWFwcyBhbmQgdGhlIGZpcnN0IHdheXBvaW50IGlzIHVzZWQgYXMgdGhlIHRvLWFkZHJlc3MgKHRoZSByZXN0IGlzIGlnbm9yZWQpLCBvciB5b3UgY2FuIG9wZW4gR29vZ2xlIE1hcHMgb24gd2ViIHNvIGFsbCB3YXlwb2ludHMgYXJlIHNob3duIChzZXQgdGhpcyBwcm9wZXJ0eSB0byB0cnVlKS4gRGVmYXVsdCBmYWxzZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kVHJpcERhdGEoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnRpYWwgdmFsdWVzIGZvciBzZW5kIHRyaXAgZGF0YVwiLCB0aGlzLmZyb21EZXN0aW5hdGlvbiwgdGhpcy50b0Rlc3RpbmF0aW9uKTtcbiAgICAgICAgaWYoIXRoaXMuZnJvbURlc3RpbmF0aW9uKXtcbiAgICAgICAgICAgIHRoaXMuY29vcmRzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZnJvbURlc3RpbmF0aW9uID0gdGhpcy5sb2NPbkxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMudG9EZXN0aW5hdGlvbil7XG4gICAgICAgICAgICB0aGlzLmNvb3JkcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRvRGVzdGluYXRpb24gPSB0aGlzLmxvY09uQXJyaXZhbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIk9yaWdpbiBhbmQgZGVzdGluYXRpb24gaW4gYmxhbmsgc2NyZWVuIGNvbXBvbmVudFwiLCB0aGlzLmZyb21EZXN0aW5hdGlvbiwgdGhpcy50b0Rlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy50cmlwU2VydmljZS5zZXRDb25maWdVcmwodGhpcy5mcm9tRGVzdGluYXRpb24sIHRoaXMudG9EZXN0aW5hdGlvbiwgdGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB0aGlzLnRyaXBTZXJ2aWNlLnNldEZpcmViYXNlVHJpcFVybCgpO1xuICAgICAgICB0aGlzLnRyaXBEYXRhID0gdGhpcy50cmlwU2VydmljZS5zaG93Q29uZmlnUmVzcG9uc2UoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25hdmlnYXRpb25cIl0pO1xuICAgIH1cblxuICAgIGFycml2ZWQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmZyb21EZXN0aW5hdGlvbiB8fCB0aGlzLmZyb21EZXN0aW5hdGlvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGF0TG9uZygpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmxvY09uQXJyaXZhbCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uIG9uIGFycml2YWxcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRUcmlwRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRUcmlwRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90aGFua3NcIl0pO1xuICAgIH1cbn0iXX0=