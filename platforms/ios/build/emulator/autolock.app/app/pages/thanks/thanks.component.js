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
        this.getTripData();
        // this.route.queryParams.subscribe(params => {
        //     let recentTrip = params['trip'];
        //     console.log("Recent trip data is...", JSON.stringify(recentTrip));
        //     this.trip.travelTime = '';
        //     this.trip.distanceTraveled = '';
        //     this.trip.averageSpeed = '';
        //     this.trip.pointsEarned = '';
        //     this.trip.week = true;
        //     this.trip.month = true;
        // });
    };
    ThanksComponent.prototype.getTripData = function () {
        this.firebaseService.getTripInfo().then(function (result) {
            console.log("Get trip data result...", result);
            return result;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlEO0FBQ3pELCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMkVBQXlFO0FBUXpFO0lBS0kseUJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxLQUFxQjtRQUZyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLCtDQUErQztRQUMvQyx1Q0FBdUM7UUFDdkMseUVBQXlFO1FBQ3pFLGlDQUFpQztRQUNqQyx1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLG1DQUFtQztRQUNuQyw2QkFBNkI7UUFDN0IsOEJBQThCO1FBQzlCLE1BQU07SUFDVixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBMUNRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsa0NBQWUsQ0FBQztZQUN6QyxXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLDJCQUEyQixDQUFDO1NBQy9FLENBQUM7eUNBTThCLGVBQU07WUFDRyxrQ0FBZTtZQUN6Qix1QkFBYztPQVBoQyxlQUFlLENBNEMzQjtJQUFELHNCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhY2tncm91bmRHZW9sb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWdlb2xvY2F0aW9uLWx0XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aGFua3NcIixcbiAgICBwcm92aWRlcnM6IFtUcmlwU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy90aGFua3MvdGhhbmtzLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRoYW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHRyaXA7XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICB0aGlzLnRyaXAgPSBUcmlwO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpe1xuICAgICAgICB0aGlzLmdldFRyaXBEYXRhKCk7XG4gICAgICAgIC8vIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgcmVjZW50VHJpcCA9IHBhcmFtc1sndHJpcCddO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJSZWNlbnQgdHJpcCBkYXRhIGlzLi4uXCIsIEpTT04uc3RyaW5naWZ5KHJlY2VudFRyaXApKTtcbiAgICAgICAgLy8gICAgIHRoaXMudHJpcC50cmF2ZWxUaW1lID0gJyc7XG4gICAgICAgIC8vICAgICB0aGlzLnRyaXAuZGlzdGFuY2VUcmF2ZWxlZCA9ICcnO1xuICAgICAgICAvLyAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9ICcnO1xuICAgICAgICAvLyAgICAgdGhpcy50cmlwLnBvaW50c0Vhcm5lZCA9ICcnO1xuICAgICAgICAvLyAgICAgdGhpcy50cmlwLndlZWsgPSB0cnVlO1xuICAgICAgICAvLyAgICAgdGhpcy50cmlwLm1vbnRoID0gdHJ1ZTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ2V0VHJpcERhdGEoKXtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VHJpcEluZm8oKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCB0cmlwIGRhdGEgcmVzdWx0Li4uXCIsIHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaGFyZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHlvdXJSYW5rKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgcmVkZWVtKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG59Il19