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
    function BlankScreenComponent(router, firebaseService, tripService, page, http) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.tripService = tripService;
        this.page = page;
        this.http = http;
        this.screenTouched = false;
        this.directions = new nativescript_directions_1.Directions;
        this.stackLayout = page.getViewById("view");
        this.directions.available().then(function (avail) {
            console.log(avail ? "Yes" : "No");
        });
    }
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
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.tripService.setConfigUrl(this.fromDestination, this.toDestination);
                        _a = this;
                        return [4 /*yield*/, this.tripService.showConfigResponse()];
                    case 1:
                        _a.tripData = _b.sent();
                        console.log("Trip data is now...", this.tripData);
                        return [2 /*return*/];
                }
            });
        });
    };
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        this.getTripData();
        this.router.navigate(["/list"]);
    };
    BlankScreenComponent = __decorate([
        core_1.Component({
            selector: "blank-screen",
            moduleId: module.id,
            templateUrl: "./blank-screen.html",
            styleUrls: ["./blank-screen-common.css", "./blank-screen.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            trip_service_1.TripService,
            page_1.Page,
            http_1.Http])
    ], BlankScreenComponent);
    return BlankScreenComponent;
}());
exports.BlankScreenComponent = BlankScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQUdyRCxzQ0FBd0Q7QUFFeEQsK0RBQTZEO0FBQzdELG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBUS9CO0lBU0ksOEJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVTtRQUpWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFYOUIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFHLElBQUksb0NBQVUsQ0FBQztRQVd4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixVQUFVLENBQUMsY0FBWSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsNENBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JCLElBQUksRUFBRTtnQkFDRixPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDOUI7WUFDRCxFQUFFLEVBQUUsQ0FBQztvQkFDRCxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWU7aUJBQ2hDLENBQUM7WUFDRixHQUFHLEVBQUU7Z0JBQ0QsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGdSQUFnUjthQUM1UztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUssMENBQVcsR0FBakI7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDeEUsS0FBQSxJQUFJLENBQUE7d0JBQVkscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFBOzt3QkFBM0QsR0FBSyxRQUFRLEdBQUcsU0FBMkMsQ0FBQzt3QkFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7O0tBQ3JEO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTFEUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLG9CQUFvQixDQUFDO1NBQ2pFLENBQUM7eUNBVThCLGVBQU07WUFDRyxrQ0FBZTtZQUNuQiwwQkFBVztZQUNsQixXQUFJO1lBQ0osV0FBSTtPQWJyQixvQkFBb0IsQ0EyRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbi8vIGltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgRGlyZWN0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAuc2VydmljZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYmxhbmstc2NyZWVuXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2JsYW5rLXNjcmVlbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2JsYW5rLXNjcmVlbi1jb21tb24uY3NzXCIsIFwiLi9ibGFuay1zY3JlZW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEJsYW5rU2NyZWVuQ29tcG9uZW50IHtcblxuICAgIHNjcmVlblRvdWNoZWQgPSBmYWxzZTtcbiAgICBzdGFja0xheW91dDtcbiAgICBkaXJlY3Rpb25zID0gbmV3IERpcmVjdGlvbnM7XG4gICAgdG9EZXN0aW5hdGlvbjtcbiAgICBmcm9tRGVzdGluYXRpb247XG4gICAgdHJpcERhdGE7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cFxuICAgICkge1xuICAgICAgICB0aGlzLnN0YWNrTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInZpZXdcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGF2YWlsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVG91Y2goKXtcbiAgICAgICAgdGhpcy5zY3JlZW5Ub3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGlzLnNjcmVlblRvdWNoZWQgPSBmYWxzZTt9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGZyb206IHsgLy8gb3B0aW9uYWwsIGRlZmF1bHQgJ2N1cnJlbnQgbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy50b0Rlc3RpbmF0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG86IFt7IC8vIGlmIGFuIEFycmF5IGlzIHBhc3NlZCAoYXMgaW4gdGhpcyBleGFtcGxlKSwgdGhlIGxhc3QgaXRlbSBpcyB0aGUgZGVzdGluYXRpb24sIHRoZSBhZGRyZXNzZXMgaW4gYmV0d2VlbiBhcmUgJ3dheXBvaW50cycuXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5mcm9tRGVzdGluYXRpb25cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgaW9zOiB7XG4gICAgICAgICAgICAgICAgcHJlZmVyR29vZ2xlTWFwczogdHJ1ZSwgLy8gSWYgdGhlIEdvb2dsZSBNYXBzIGFwcCBpcyBpbnN0YWxsZWQsIHVzZSB0aGF0IG9uZSBpbnN0ZWFkIG9mIEFwcGxlIE1hcHMsIGJlY2F1c2UgaXQgc3VwcG9ydHMgd2F5cG9pbnRzLiBEZWZhdWx0IHRydWUuXG4gICAgICAgICAgICAgICAgYWxsb3dHb29nbGVNYXBzV2ViOiB0cnVlIC8vIElmIHdheXBvaW50cyBhcmUgcGFzc2VkIGluIGFuZCBHb29nbGUgTWFwcyBpcyBub3QgaW5zdGFsbGVkLCB5b3UgY2FuIGVpdGhlciBvcGVuIEFwcGxlIE1hcHMgYW5kIHRoZSBmaXJzdCB3YXlwb2ludCBpcyB1c2VkIGFzIHRoZSB0by1hZGRyZXNzICh0aGUgcmVzdCBpcyBpZ25vcmVkKSwgb3IgeW91IGNhbiBvcGVuIEdvb2dsZSBNYXBzIG9uIHdlYiBzbyBhbGwgd2F5cG9pbnRzIGFyZSBzaG93biAoc2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSkuIERlZmF1bHQgZmFsc2UuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJpcERhdGEoKXtcbiAgICAgICAgdGhpcy50cmlwU2VydmljZS5zZXRDb25maWdVcmwodGhpcy5mcm9tRGVzdGluYXRpb24sIHRoaXMudG9EZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMudHJpcERhdGEgPSBhd2FpdCB0aGlzLnRyaXBTZXJ2aWNlLnNob3dDb25maWdSZXNwb25zZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyaXAgZGF0YSBpcyBub3cuLi5cIiwgdGhpcy50cmlwRGF0YSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9uYXZpZ2F0aW9uXCJdKTtcbiAgICB9XG5cbiAgICBhcnJpdmVkKCkge1xuICAgICAgICB0aGlzLmdldFRyaXBEYXRhKCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICB9XG59Il19