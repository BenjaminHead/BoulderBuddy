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
    };
    LogBoulderComponent.prototype.addProblem = function () {
        this.boulder.problems.push(this.problem);
        console.log("Boulder problems", this.boulder.problems);
        this.recentlyAdded = this.problem.name;
    };
    LogBoulderComponent.prototype.logBoulder = function () {
        var _this = this;
        if (!this.boulder.problems) {
            alert("Log some boulders");
        }
        else {
            this.boulder.location = this.location;
            console.log("Boulder before assignments", this.boulder.problems);
            this.firebaseService.checkForDuplicates(this.boulder, this.area)
                .then(function (result) {
                if (result === true) {
                    console.log("True", result);
                    _this.firebaseService.sendBoulderInfo(_this.boulder, _this.area);
                }
                else {
                    alert("Duplicate name detected");
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLWJvdWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nLWJvdWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCwyRUFBeUU7QUFFekUsMEVBQTBFO0FBQzFFLGlEQUFnRDtBQUVoRCxtRUFBcUQ7QUFHckQscUVBQXFJO0FBQ3JJLHNDQUF3RDtBQUV4RCwrREFBNkQ7QUFDN0QsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFRL0I7SUFzQkksNkJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXpCekMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFHLElBQUksb0NBQVUsQ0FBQztRQU01QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUVGLFlBQU8sR0FBRztZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFDO1FBU0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFD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QUMsVUFBQyxLQUFLO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQTNGUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDNUIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxxQ0FBcUMsQ0FBQztTQUNuRyxDQUFDO3lDQXVCOEIsZUFBTTtZQUNHLGtDQUFlO1lBQ25CLDBCQUFXO1lBQ2xCLFdBQUk7WUFDSixXQUFJO1lBQ0gsdUJBQWM7T0EzQmhDLG1CQUFtQixDQTRGL0I7SUFBRCwwQkFBQztDQUFBLEFBNUZELElBNEZDO0FBNUZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBEaXJlY3Rpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCI7XG5pbXBvcnQgeyBNYXBWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxvZy1ib3VsZGVyXCIsXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZy1ib3VsZGVyL2xvZy1ib3VsZGVyLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbG9nLWJvdWxkZXIvbG9nLWJvdWxkZXItY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvbG9nLWJvdWxkZXIvbG9nLWJvdWxkZXIuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ0JvdWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc2NyZWVuVG91Y2hlZCA9IGZhbHNlO1xuICAgIHN0YWNrTGF5b3V0O1xuICAgIGRpcmVjdGlvbnMgPSBuZXcgRGlyZWN0aW9ucztcbiAgICBsb2NhdGlvbjtcbiAgICB1c2VyO1xuICAgIGFyZWE7XG4gICAgcmVjZW50bHlBZGRlZDtcblxuICAgIGNvb3JkcyA9IGZhbHNlO1xuICAgIGJvdWxkZXIgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgIHByb2JsZW1zOiBbXVxuICAgIH07XG5cbiAgICBwcm9ibGVtID0ge1xuICAgICAgICBncmFkZTogJycsXG4gICAgICAgIG5hbWU6ICcnXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3RhY2tMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwidmlld1wiKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLmF2YWlsYWJsZSgpLnRoZW4oYXZhaWwgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXZhaWwgPyBcIlllc1wiIDogXCJOb1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9jT25Mb2NrOiBhbnk7XG4gICAgbG9jT25BcnJpdmFsOiBhbnk7XG4gICAgbGF0TG9uZztcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLnNldExhdExvbmcoKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgIC8vICAgICB0aGlzLmxvY09uTG9jayA9IHJlc3VsdDtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gb24gbG9ja1wiLCB0aGlzLmxvY09uTG9jayk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIHNldExhdExvbmcoKSB7XG4gICAgICAgIHRoaXMubGF0TG9uZyA9IGdldEN1cnJlbnRMb2NhdGlvbih7ZGVzaXJlZEFjY3VyYWN5OiAzfSkudGhlbihmdW5jdGlvbihsb2Mpe1xuICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgIGxldCBsYXQgPSBKU09OLnN0cmluZ2lmeShsb2MubGF0aXR1ZGUpO1xuICAgICAgICAgICAgICAgIGxldCBsb25nID0gSlNPTi5zdHJpbmdpZnkobG9jLmxvbmdpdHVkZSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvY09uTG9jayA9IGxhdCArICcsJyArIGxvbmc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY09uTG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXRMb25nO1xuICAgIH1cblxuICAgIGdldExvY2F0aW9uKCl7XG4gICAgICAgIHRoaXMuc2V0TGF0TG9uZygpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSByZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgTG9jYXRpb25cIiwgdGhpcy5sb2NhdGlvbilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQcm9ibGVtKCl7XG4gICAgICAgIHRoaXMuYm91bGRlci5wcm9ibGVtcy5wdXNoKHRoaXMucHJvYmxlbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm91bGRlciBwcm9ibGVtc1wiLCB0aGlzLmJvdWxkZXIucHJvYmxlbXMpO1xuICAgICAgICB0aGlzLnJlY2VudGx5QWRkZWQgPSB0aGlzLnByb2JsZW0ubmFtZTtcbiAgICB9XG5cbiAgICBsb2dCb3VsZGVyKCkge1xuICAgICAgICBpZighdGhpcy5ib3VsZGVyLnByb2JsZW1zKSB7XG4gICAgICAgICAgICBhbGVydChcIkxvZyBzb21lIGJvdWxkZXJzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3VsZGVyLmxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm91bGRlciBiZWZvcmUgYXNzaWdubWVudHNcIiwgdGhpcy5ib3VsZGVyLnByb2JsZW1zKTtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmNoZWNrRm9yRHVwbGljYXRlcyh0aGlzLmJvdWxkZXIsIHRoaXMuYXJlYSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRydWVcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmRCb3VsZGVySW5mbyh0aGlzLmJvdWxkZXIsIHRoaXMuYXJlYSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkR1cGxpY2F0ZSBuYW1lIGRldGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=