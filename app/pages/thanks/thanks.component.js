"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_1 = require("../../shared/trip/trip");
var trip_service_1 = require("../../shared/trip/trip.service");
var firebase_service_1 = require("../../shared/services/firebase.service");
var ThanksComponent = /** @class */ (function () {
    function ThanksComponent(router, firebaseService, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.trip = trip_1.Trip;
    }
    ThanksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var recentTrip = params['trip'];
            console.log("Recent trip data is...", recentTrip);
            _this.trip.travelTime = '';
            _this.trip.distanceTraveled = '';
            _this.trip.averageSpeed = '';
            _this.trip.pointsEarned = '';
            _this.trip.week = true;
            _this.trip.month = true;
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
            router_1.ActivatedRoute])
    ], ThanksComponent);
    return ThanksComponent;
}());
exports.ThanksComponent = ThanksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlEO0FBQ3pELCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMkVBQXlFO0FBUXpFO0lBS0kseUJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxLQUFxQjtRQUZyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUMxQixLQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbENRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsa0NBQWUsQ0FBQztZQUN6QyxXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLDJCQUEyQixDQUFDO1NBQy9FLENBQUM7eUNBTThCLGVBQU07WUFDRyxrQ0FBZTtZQUN6Qix1QkFBYztPQVBoQyxlQUFlLENBb0MzQjtJQUFELHNCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhY2tncm91bmRHZW9sb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWdlb2xvY2F0aW9uLWx0XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aGFua3NcIixcbiAgICBwcm92aWRlcnM6IFtUcmlwU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy90aGFua3MvdGhhbmtzLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRoYW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHRyaXA7XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICB0aGlzLnRyaXAgPSBUcmlwO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpe1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IHJlY2VudFRyaXAgPSBwYXJhbXNbJ3RyaXAnXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZW50IHRyaXAgZGF0YSBpcy4uLlwiLCByZWNlbnRUcmlwKTtcbiAgICAgICAgICAgIHRoaXMudHJpcC50cmF2ZWxUaW1lID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRyaXAuZGlzdGFuY2VUcmF2ZWxlZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy50cmlwLnBvaW50c0Vhcm5lZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy50cmlwLndlZWsgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50cmlwLm1vbnRoID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hhcmUoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9XG5cbiAgICB5b3VyUmFuaygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHJlZGVlbSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxufSJdfQ==