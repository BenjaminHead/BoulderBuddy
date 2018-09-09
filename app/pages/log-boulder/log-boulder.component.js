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
    LogBoulderComponent.prototype.clearProblems = function () {
        this.boulder.problems = [];
        this.problem.grade = '';
        this.problem.name = '';
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
                console.log("True or false?", result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLWJvdWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nLWJvdWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCwyRUFBeUU7QUFFekUsMEVBQTBFO0FBQzFFLGlEQUFnRDtBQUVoRCxtRUFBcUQ7QUFHckQscUVBQXFJO0FBQ3JJLHNDQUF3RDtBQUV4RCwrREFBNkQ7QUFDN0QsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFRL0I7SUFzQkksNkJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVSxFQUNWLEtBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQXpCekMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFHLElBQUksb0NBQVUsQ0FBQztRQU01QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUVGLFlBQU8sR0FBRztZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFDO1FBU0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFD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LENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUM1QixLQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDckMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7SUFDTCxDQUFDO0lBbEdRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUM1QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLHFDQUFxQyxDQUFDO1NBQ25HLENBQUM7eUNBdUI4QixlQUFNO1lBQ0csa0NBQWU7WUFDbkIsMEJBQVc7WUFDbEIsV0FBSTtZQUNKLFdBQUk7WUFDSCx1QkFBYztPQTNCaEMsbUJBQW1CLENBbUcvQjtJQUFELDBCQUFDO0NBQUEsQUFuR0QsSUFtR0M7QUFuR1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyBpbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzLCBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IERpcmVjdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRpcmVjdGlvbnNcIjtcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBnZXRDdXJyZW50TG9jYXRpb24sIHdhdGNoTG9jYXRpb24sIGRpc3RhbmNlLCBjbGVhcldhdGNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAuc2VydmljZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibG9nLWJvdWxkZXJcIixcbiAgICBwcm92aWRlcnM6IFtGaXJlYmFzZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9nLWJvdWxkZXIvbG9nLWJvdWxkZXIuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9sb2ctYm91bGRlci9sb2ctYm91bGRlci1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9sb2ctYm91bGRlci9sb2ctYm91bGRlci5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9nQm91bGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzY3JlZW5Ub3VjaGVkID0gZmFsc2U7XG4gICAgc3RhY2tMYXlvdXQ7XG4gICAgZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zO1xuICAgIGxvY2F0aW9uO1xuICAgIHVzZXI7XG4gICAgYXJlYTtcbiAgICByZWNlbnRseUFkZGVkO1xuXG4gICAgY29vcmRzID0gZmFsc2U7XG4gICAgYm91bGRlciA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgcHJvYmxlbXM6IFtdXG4gICAgfTtcblxuICAgIHByb2JsZW0gPSB7XG4gICAgICAgIGdyYWRlOiAnJyxcbiAgICAgICAgbmFtZTogJydcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdGFja0xheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ2aWV3XCIpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMuYXZhaWxhYmxlKCkudGhlbihhdmFpbCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhdmFpbCA/IFwiWWVzXCIgOiBcIk5vXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2NPbkxvY2s6IGFueTtcbiAgICBsb2NPbkFycml2YWw6IGFueTtcbiAgICBsYXRMb25nO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIHRoaXMuc2V0TGF0TG9uZygpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgLy8gICAgIHRoaXMubG9jT25Mb2NrID0gcmVzdWx0O1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJMb2NhdGlvbiBvbiBsb2NrXCIsIHRoaXMubG9jT25Mb2NrKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgc2V0TGF0TG9uZygpIHtcbiAgICAgICAgdGhpcy5sYXRMb25nID0gZ2V0Q3VycmVudExvY2F0aW9uKHtkZXNpcmVkQWNjdXJhY3k6IDN9KS50aGVuKGZ1bmN0aW9uKGxvYyl7XG4gICAgICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxhdCA9IEpTT04uc3RyaW5naWZ5KGxvYy5sYXRpdHVkZSk7XG4gICAgICAgICAgICAgICAgbGV0IGxvbmcgPSBKU09OLnN0cmluZ2lmeShsb2MubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9jT25Mb2NrID0gbGF0ICsgJywnICsgbG9uZztcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jT25Mb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxhdExvbmc7XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24oKXtcbiAgICAgICAgdGhpcy5zZXRMYXRMb25nKCkudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBMb2NhdGlvblwiLCB0aGlzLmxvY2F0aW9uKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFByb2JsZW0oKXtcbiAgICAgICAgdGhpcy5ib3VsZGVyLnByb2JsZW1zLnB1c2godGhpcy5wcm9ibGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJCb3VsZGVyIHByb2JsZW1zXCIsIHRoaXMuYm91bGRlci5wcm9ibGVtcyk7XG4gICAgICAgIHRoaXMucmVjZW50bHlBZGRlZCA9IHRoaXMucHJvYmxlbS5uYW1lO1xuICAgIH1cblxuICAgIGNsZWFyUHJvYmxlbXMoKXtcbiAgICAgICAgdGhpcy5ib3VsZGVyLnByb2JsZW1zID0gW107XG4gICAgICAgIHRoaXMucHJvYmxlbS5ncmFkZSA9ICcnO1xuICAgICAgICB0aGlzLnByb2JsZW0ubmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGxvZ0JvdWxkZXIoKSB7XG4gICAgICAgIGlmKCF0aGlzLmJvdWxkZXIucHJvYmxlbXMpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTG9nIHNvbWUgYm91bGRlcnNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvdWxkZXIubG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCb3VsZGVyIGJlZm9yZSBhc3NpZ25tZW50c1wiLCB0aGlzLmJvdWxkZXIucHJvYmxlbXMpO1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuY2hlY2tGb3JEdXBsaWNhdGVzKHRoaXMuYm91bGRlciwgdGhpcy5hcmVhKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJ1ZSBvciBmYWxzZT9cIiwgcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRydWVcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmRCb3VsZGVySW5mbyh0aGlzLmJvdWxkZXIsIHRoaXMuYXJlYSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkR1cGxpY2F0ZSBuYW1lIGRldGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=