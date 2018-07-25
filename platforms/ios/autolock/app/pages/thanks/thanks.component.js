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
        this.tripService.getPointsFromTripDB();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFFM0UsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFDekUsK0JBQWlDO0FBQ2pDLHVDQUFxQztBQVFyQztJQWdCSSx5QkFBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLEtBQXFCO1FBSHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFqQnpDLFNBQUksR0FBRztZQUNILFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUNGLFVBQUssR0FBRyxFQUFFLENBQUM7SUFPWCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQWdEQztRQS9DRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxD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QUFFLENBQUMsa0NBQWtDLEVBQUUsMkJBQTJCLENBQUM7U0FDL0UsQ0FBQzt5Q0FpQjhCLGVBQU07WUFDRyxrQ0FBZTtZQUNuQiwwQkFBVztZQUNqQix1QkFBYztPQW5CaEMsZUFBZSxDQW9GM0I7SUFBRCxzQkFBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFja2dyb3VuZEdlb2xvY2F0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtZ2VvbG9jYXRpb24tbHRcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAuc2VydmljZVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGhhbmtzXCIsXG4gICAgcHJvdmlkZXJzOiBbVHJpcFNlcnZpY2UsIEZpcmViYXNlU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy90aGFua3MvdGhhbmtzLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvdGhhbmtzL3RoYW5rcy1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy90aGFua3MvdGhhbmtzLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBUaGFua3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICB0cmlwID0ge1xuICAgICAgICBkZXN0aW5hdGlvbjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHRyYXZlbFRpbWU6ICcnLFxuICAgICAgICBkaXN0YW5jZVRyYXZlbGVkOiAnJyxcbiAgICAgICAgYXZlcmFnZVNwZWVkOiAnJyxcbiAgICAgICAgcG9pbnRzRWFybmVkOiAnJyxcbiAgICAgICAgZGF0ZTogJycsXG4gICAgICAgIHdlZWs6IGZhbHNlLFxuICAgICAgICBtb250aDogZmFsc2VcbiAgICB9O1xuICAgIHRyaXBzID0gW107XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpe1xuICAgICAgICB0aGlzLnRyaXBTZXJ2aWNlLmdldFBvaW50c0Zyb21UcmlwREIoKTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VHJpcEluZm8oKS50aGVuKChyZXN1bHQpPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGFua3MgcGFnZSBoYXMgcmVjZWl2ZWQuLi5cIiwgcmVzdWx0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHJlc3VsdCkpO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gcmVzdWx0W2tleV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgICAgICAgICAgIGxldCBsYXN0V2VlayA9IG1vbWVudCgpLnN1YnRyYWN0KDcsJ2QnKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdE1vbnRoID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgICAgICAgICAgbGV0IG5vdyA9IHRvZGF5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYob2JqLmRhdGUgPT09IG5vdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGVzdGluYXRpb24gPSBvYmouZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5vcmlnaW4gPSBvYmoub3JpZ2luO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAudHJhdmVsVGltZSA9IG9iai50cmF2ZWxUaW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGlzdGFuY2VUcmF2ZWxlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuYXZlcmFnZVNwZWVkID0gb2JqLmRpc3RhbmNlVHJhdmVsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5wb2ludHNFYXJuZWQgPSBvYmoucG9pbnRzRWFybmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGF0ZSA9IG9iai5kYXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzLnB1c2godGhpcy50cmlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobW9tZW50KG9iai5kYXRlKS5pc1NhbWVPckFmdGVyKGxhc3RXZWVrKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGVzdGluYXRpb24gPSBvYmouZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5vcmlnaW4gPSBvYmoub3JpZ2luO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAudHJhdmVsVGltZSA9IG9iai50cmF2ZWxUaW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGlzdGFuY2VUcmF2ZWxlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuYXZlcmFnZVNwZWVkID0gb2JqLmRpc3RhbmNlVHJhdmVsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5wb2ludHNFYXJuZWQgPSBvYmoucG9pbnRzRWFybmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGF0ZSA9IG9iai5kYXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAud2VlayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcHMucHVzaCh0aGlzLnRyaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihtb21lbnQob2JqLmRhdGUpLmlzU2FtZU9yQWZ0ZXIobGFzdE1vbnRoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGVzdGluYXRpb24gPSBvYmouZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5vcmlnaW4gPSBvYmoub3JpZ2luO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAudHJhdmVsVGltZSA9IG9iai50cmF2ZWxUaW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGlzdGFuY2VUcmF2ZWxlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuYXZlcmFnZVNwZWVkID0gb2JqLmRpc3RhbmNlVHJhdmVsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5wb2ludHNFYXJuZWQgPSBvYmoucG9pbnRzRWFybmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGF0ZSA9IG9iai5kYXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAubW9udGggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXBzLnB1c2godGhpcy50cmlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNoYXJlKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgeW91clJhbmsoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9XG5cbiAgICByZWRlZW0oKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9XG5cbn0iXX0=