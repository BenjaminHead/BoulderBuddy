"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_service_1 = require("../../shared/trip/trip.service");
var firebase_service_1 = require("../../shared/services/firebase.service");
var moment = require("moment");
require("rxjs/add/operator/toPromise");
var ThanksComponent = /** @class */ (function () {
    function ThanksComponent(router, firebaseService, tripService, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.tripService = tripService;
        this.route = route;
        this.trip = {
            destination: '',
            origin: '',
            travelTime: '',
            distanceTraveled: '',
            averageSpeed: '',
            pointsEarned: '',
            date: '',
            week: false,
            month: false
        };
        this.trips = [];
    }
    ThanksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getTripInfo().then(function (result) {
            console.log("Thanks page has received...", result);
            console.log(Object.keys(result));
            for (var key in result) {
                // skip loop if the property is from prototype
                if (!result.hasOwnProperty(key))
                    continue;
                var obj = result[key];
                console.log(obj);
                var today = moment().format("YYYY-MM-DD");
                var lastWeek = moment().subtract(7, 'd').format('YYYY-MM-DD');
                var lastMonth = moment().subtract(1, 'month').format('YYYY-MM-DD');
                var now = today.toString();
                if (obj.date === now) {
                    _this.trip.destination = obj.destination;
                    _this.trip.origin = obj.origin;
                    _this.trip.travelTime = obj.travelTime;
                    _this.trip.distanceTraveled = obj.distanceTraveled;
                    _this.trip.averageSpeed = obj.distanceTraveled;
                    _this.trip.pointsEarned = obj.pointsEarned;
                    _this.trip.date = obj.date;
                    _this.trips.push(_this.trip);
                }
                if (moment(obj.date).isSameOrAfter(lastWeek)) {
                    _this.trip.destination = obj.destination;
                    _this.trip.origin = obj.origin;
                    _this.trip.travelTime = obj.travelTime;
                    _this.trip.distanceTraveled = obj.distanceTraveled;
                    _this.trip.averageSpeed = obj.distanceTraveled;
                    _this.trip.pointsEarned = obj.pointsEarned;
                    _this.trip.date = obj.date;
                    _this.trip.week = true;
                    _this.trips.push(_this.trip);
                }
                if (moment(obj.date).isSameOrAfter(lastMonth)) {
                    _this.trip.destination = obj.destination;
                    _this.trip.origin = obj.origin;
                    _this.trip.travelTime = obj.travelTime;
                    _this.trip.distanceTraveled = obj.distanceTraveled;
                    _this.trip.averageSpeed = obj.distanceTraveled;
                    _this.trip.pointsEarned = obj.pointsEarned;
                    _this.trip.date = obj.date;
                    _this.trip.month = true;
                    _this.trips.push(_this.trip);
                }
            }
        });
    };
    ThanksComponent.prototype.share = function () {
        this.router.navigate([""]);
    };
    ThanksComponent.prototype.yourRank = function () {
        this.router.navigate([""]);
    };
    ThanksComponent.prototype.redeem = function () {
        this.router.navigate([""]);
    };
    ThanksComponent = __decorate([
        core_1.Component({
            selector: "thanks",
            providers: [trip_service_1.TripService, firebase_service_1.FirebaseService],
            templateUrl: "./pages/thanks/thanks.html",
            styleUrls: ["./pages/thanks/thanks-common.css", "./pages/thanks/thanks.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            trip_service_1.TripService,
            router_1.ActivatedRoute])
    ], ThanksComponent);
    return ThanksComponent;
}());
exports.ThanksComponent = ThanksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFFM0UsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFDekUsK0JBQWlDO0FBQ2pDLHVDQUFxQztBQVFyQztJQWdCSSx5QkFBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLEtBQXFCO1FBSHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFqQnpDLFNBQUksR0FBRztZQUNILFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUNGLFVBQUssR0FBRyxFQUFFLENBQUM7SUFPWCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQStDQztRQTlDRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyQiw4Q0FBOEM7Z0JBQzlDLEVBQUUsQ0FB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O3lDQWlCOEIsZUFBTTtZQUNHLGtDQUFlO1lBQ25CLDBCQUFXO1lBQ2pCLHVCQUFjO09BbkJoQyxlQUFlLENBbUYzQjtJQUFELHNCQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcFwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aGFua3NcIixcbiAgICBwcm92aWRlcnM6IFtUcmlwU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy90aGFua3MvdGhhbmtzLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRoYW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHRyaXAgPSB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgdHJhdmVsVGltZTogJycsXG4gICAgICAgIGRpc3RhbmNlVHJhdmVsZWQ6ICcnLFxuICAgICAgICBhdmVyYWdlU3BlZWQ6ICcnLFxuICAgICAgICBwb2ludHNFYXJuZWQ6ICcnLFxuICAgICAgICBkYXRlOiAnJyxcbiAgICAgICAgd2VlazogZmFsc2UsXG4gICAgICAgIG1vbnRoOiBmYWxzZVxuICAgIH07XG4gICAgdHJpcHMgPSBbXTtcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCl7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRyaXBJbmZvKCkudGhlbigocmVzdWx0KT0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhhbmtzIHBhZ2UgaGFzIHJlY2VpdmVkLi4uXCIsIHJlc3VsdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhyZXN1bHQpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHJlc3VsdFtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFdlZWsgPSBtb21lbnQoKS5zdWJ0cmFjdCg3LCdkJykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RNb250aCA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgICAgIGxldCBub3cgPSB0b2RheS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGlmKG9iai5kYXRlID09PSBub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwcy5wdXNoKHRoaXMudHJpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG1vbWVudChvYmouZGF0ZSkuaXNTYW1lT3JBZnRlcihsYXN0V2VlaykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLndlZWsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzLnB1c2godGhpcy50cmlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobW9tZW50KG9iai5kYXRlKS5pc1NhbWVPckFmdGVyKGxhc3RNb250aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLm1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwcy5wdXNoKHRoaXMudHJpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaGFyZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHlvdXJSYW5rKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgcmVkZWVtKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG59Il19