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
        this.router.navigate(["/redeem-partners"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFFM0UsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFDekUsK0JBQWlDO0FBQ2pDLHVDQUFxQztBQVFyQztJQWdCSSx5QkFBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLEtBQXFCO1FBSHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFqQnpDLFNBQUksR0FBRztZQUNILFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUNGLFVBQUssR0FBRyxFQUFFLENBQUM7SUFPWCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQWdEQztRQS9DRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxD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LEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSwyQkFBMkIsQ0FBQztTQUMvRSxDQUFDO3lDQWlCOEIsZUFBTTtZQUNHLGtDQUFlO1lBQ25CLDBCQUFXO1lBQ2pCLHVCQUFjO09BbkJoQyxlQUFlLENBb0YzQjtJQUFELHNCQUFDO0NBQUEsQUFwRkQsSUFvRkM7QUFwRlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcFwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aGFua3NcIixcbiAgICBwcm92aWRlcnM6IFtUcmlwU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy90aGFua3MvdGhhbmtzLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRoYW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHRyaXAgPSB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgdHJhdmVsVGltZTogJycsXG4gICAgICAgIGRpc3RhbmNlVHJhdmVsZWQ6ICcnLFxuICAgICAgICBhdmVyYWdlU3BlZWQ6ICcnLFxuICAgICAgICBwb2ludHNFYXJuZWQ6ICcnLFxuICAgICAgICBkYXRlOiAnJyxcbiAgICAgICAgd2VlazogZmFsc2UsXG4gICAgICAgIG1vbnRoOiBmYWxzZVxuICAgIH07XG4gICAgdHJpcHMgPSBbXTtcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCl7XG4gICAgICAgIHRoaXMudHJpcFNlcnZpY2UuZ2V0UG9pbnRzRnJvbVRyaXBEQigpO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRUcmlwSW5mbygpLnRoZW4oKHJlc3VsdCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoYW5rcyBwYWdlIGhhcyByZWNlaXZlZC4uLlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMocmVzdWx0KSk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Lmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSByZXN1bHRba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgICAgICAgICAgICAgIGxldCB0b2RheSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RXZWVrID0gbW9tZW50KCkuc3VidHJhY3QoNywnZCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgICAgIGxldCBsYXN0TW9udGggPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgICAgICAgICBsZXQgbm93ID0gdG9kYXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZihvYmouZGF0ZSA9PT0gbm93KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kZXN0aW5hdGlvbiA9IG9iai5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLm9yaWdpbiA9IG9iai5vcmlnaW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC50cmF2ZWxUaW1lID0gb2JqLnRyYXZlbFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kaXN0YW5jZVRyYXZlbGVkID0gb2JqLmRpc3RhbmNlVHJhdmVsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5hdmVyYWdlU3BlZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLnBvaW50c0Vhcm5lZCA9IG9iai5wb2ludHNFYXJuZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kYXRlID0gb2JqLmRhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcHMucHVzaCh0aGlzLnRyaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihtb21lbnQob2JqLmRhdGUpLmlzU2FtZU9yQWZ0ZXIobGFzdFdlZWspKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kZXN0aW5hdGlvbiA9IG9iai5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLm9yaWdpbiA9IG9iai5vcmlnaW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC50cmF2ZWxUaW1lID0gb2JqLnRyYXZlbFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kaXN0YW5jZVRyYXZlbGVkID0gb2JqLmRpc3RhbmNlVHJhdmVsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5hdmVyYWdlU3BlZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLnBvaW50c0Vhcm5lZCA9IG9iai5wb2ludHNFYXJuZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kYXRlID0gb2JqLmRhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC53ZWVrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwcy5wdXNoKHRoaXMudHJpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG1vbWVudChvYmouZGF0ZSkuaXNTYW1lT3JBZnRlcihsYXN0TW9udGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kZXN0aW5hdGlvbiA9IG9iai5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLm9yaWdpbiA9IG9iai5vcmlnaW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC50cmF2ZWxUaW1lID0gb2JqLnRyYXZlbFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kaXN0YW5jZVRyYXZlbGVkID0gb2JqLmRpc3RhbmNlVHJhdmVsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5hdmVyYWdlU3BlZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlwLnBvaW50c0Vhcm5lZCA9IG9iai5wb2ludHNFYXJuZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5kYXRlID0gb2JqLmRhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5tb250aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcHMucHVzaCh0aGlzLnRyaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hhcmUoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9XG5cbiAgICB5b3VyUmFuaygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHJlZGVlbSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVkZWVtLXBhcnRuZXJzXCJdLCApO1xuICAgIH1cblxufSJdfQ==