"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_service_1 = require("../../shared/trip/trip.service");
var firebase_service_1 = require("../../shared/services/firebase.service");
var ThanksComponent = /** @class */ (function () {
    function ThanksComponent(router, firebaseService, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.trip = {};
        //     .then((result) => function(){
        //     console.log("trip object contains...", result);
        //     this.trip.travelTime = '';
        //     this.trip.distanceTraveled = '';
        //     this.trip.averageSpeed = '';
        //     this.trip.pointsEarned = '';
        //     this.trip.week = true;
        //     this.trip.month = true;
        // });
    }
    ThanksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.trip = params['trip'];
            console.log("User is...", _this.trip);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFRekU7SUFLSSx5QkFBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLEtBQXFCO1FBRnJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMekMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQU1OLG9DQUFvQztRQUNwQyxzREFBc0Q7UUFDdEQsaUNBQWlDO1FBQ2pDLHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsbUNBQW1DO1FBQ25DLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFDOUIsTUFBTTtJQUNWLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFwQ1EsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxrQ0FBZSxDQUFDO1lBQ3pDLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLEVBQUUsMkJBQTJCLENBQUM7U0FDL0UsQ0FBQzt5Q0FNOEIsZUFBTTtZQUNHLGtDQUFlO1lBQ3pCLHVCQUFjO09BUGhDLGVBQWUsQ0FzQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFja2dyb3VuZEdlb2xvY2F0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtZ2VvbG9jYXRpb24tbHRcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAuc2VydmljZVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRoYW5rc1wiLFxuICAgIHByb3ZpZGVyczogW1RyaXBTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvdGhhbmtzL3RoYW5rcy5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MtY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvdGhhbmtzL3RoYW5rcy5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGhhbmtzQ29tcG9uZW50IHtcblxuICAgIHRyaXAgPSB7fTtcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIC8vICAgICAudGhlbigocmVzdWx0KSA9PiBmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0cmlwIG9iamVjdCBjb250YWlucy4uLlwiLCByZXN1bHQpO1xuICAgICAgICAvLyAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSAnJztcbiAgICAgICAgLy8gICAgIHRoaXMudHJpcC5kaXN0YW5jZVRyYXZlbGVkID0gJyc7XG4gICAgICAgIC8vICAgICB0aGlzLnRyaXAuYXZlcmFnZVNwZWVkID0gJyc7XG4gICAgICAgIC8vICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gJyc7XG4gICAgICAgIC8vICAgICB0aGlzLnRyaXAud2VlayA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLnRyaXAubW9udGggPSB0cnVlO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKXtcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpcCA9IHBhcmFtc1sndHJpcCddO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGlzLi4uXCIsIHRoaXMudHJpcCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNoYXJlKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgeW91clJhbmsoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9XG5cbiAgICByZWRlZW0oKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9XG5cbn0iXX0=