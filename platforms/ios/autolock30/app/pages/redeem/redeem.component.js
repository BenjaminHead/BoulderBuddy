"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_service_1 = require("../../shared/trip/trip.service");
var firebase_service_1 = require("../../shared/services/firebase.service");
require("rxjs/add/operator/toPromise");
var RedeemComponent = /** @class */ (function () {
    function RedeemComponent(router, firebaseService, tripService, route) {
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
    RedeemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.partner = params['partner'];
            console.log(_this.partner);
        });
    };
    RedeemComponent.prototype.share = function () {
        this.router.navigate([""]);
    };
    RedeemComponent.prototype.yourRank = function () {
        this.router.navigate([""]);
    };
    RedeemComponent.prototype.redeem = function () {
        var _this = this;
        this.trip.pointsEarned = "-1000";
        var points = Number(this.trip.pointsEarned);
        console.log("Negative points, right?", points);
        this.tripService.getPointsFromTripDB().then(function (result) {
            console.log("Sum is now...", result);
            if (result > points) {
                _this.firebaseService.redeemPoints(points);
            }
            else {
                alert("Not enough points!");
            }
        });
        this.router.navigate([""]);
    };
    RedeemComponent = __decorate([
        core_1.Component({
            selector: "redeem",
            providers: [trip_service_1.TripService, firebase_service_1.FirebaseService],
            templateUrl: "./pages/redeem/redeem.html",
            styleUrls: ["./pages/redeem/redeem-common.css", "./pages/redeem/redeem.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            trip_service_1.TripService,
            router_1.ActivatedRoute])
    ], RedeemComponent);
    return RedeemComponent;
}());
exports.RedeemComponent = RedeemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZWVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZGVlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFFM0UsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFFekUsdUNBQXFDO0FBUXJDO0lBaUJJLHlCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsS0FBcUI7UUFIckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWxCekMsU0FBSSxHQUFHO1lBQ0gsV0FBVyxFQUFFLEVBQUU7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxFQUFFO1lBQ2QsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsRUFBRTtZQUNoQixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBQ0YsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQVFYLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUNqQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFuRFEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxrQ0FBZSxDQUFDO1lBQ3pDLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLEVBQUUsMkJBQTJCLENBQUM7U0FDL0UsQ0FBQzt5Q0FrQjhCLGVBQU07WUFDRyxrQ0FBZTtZQUNuQiwwQkFBVztZQUNqQix1QkFBYztPQXBCaEMsZUFBZSxDQXFEM0I7SUFBRCxzQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFja2dyb3VuZEdlb2xvY2F0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtZ2VvbG9jYXRpb24tbHRcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAuc2VydmljZVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicmVkZWVtXCIsXG4gICAgcHJvdmlkZXJzOiBbVHJpcFNlcnZpY2UsIEZpcmViYXNlU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9yZWRlZW0vcmVkZWVtLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvcmVkZWVtL3JlZGVlbS1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9yZWRlZW0vcmVkZWVtLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBSZWRlZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICB0cmlwID0ge1xuICAgICAgICBkZXN0aW5hdGlvbjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHRyYXZlbFRpbWU6ICcnLFxuICAgICAgICBkaXN0YW5jZVRyYXZlbGVkOiAnJyxcbiAgICAgICAgYXZlcmFnZVNwZWVkOiAnJyxcbiAgICAgICAgcG9pbnRzRWFybmVkOiAnJyxcbiAgICAgICAgZGF0ZTogJycsXG4gICAgICAgIHdlZWs6IGZhbHNlLFxuICAgICAgICBtb250aDogZmFsc2VcbiAgICB9O1xuICAgIHRyaXBzID0gW107XG4gICAgdXNlcjtcbiAgICBwYXJ0bmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCl7XG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhcnRuZXIgPSBwYXJhbXNbJ3BhcnRuZXInXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFydG5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNoYXJlKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgeW91clJhbmsoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9XG5cbiAgICByZWRlZW0oKXtcbiAgICAgICAgdGhpcy50cmlwLnBvaW50c0Vhcm5lZCA9IFwiLTEwMDBcIjtcbiAgICAgICAgbGV0IHBvaW50cyA9IE51bWJlcih0aGlzLnRyaXAucG9pbnRzRWFybmVkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJOZWdhdGl2ZSBwb2ludHMsIHJpZ2h0P1wiLCBwb2ludHMpO1xuICAgICAgICB0aGlzLnRyaXBTZXJ2aWNlLmdldFBvaW50c0Zyb21UcmlwREIoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VtIGlzIG5vdy4uLlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA+IHBvaW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZGVlbVBvaW50cyhwb2ludHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIk5vdCBlbm91Z2ggcG9pbnRzIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG59Il19