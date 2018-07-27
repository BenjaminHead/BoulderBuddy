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
        // this.tripService.getPointsFromTripDB();
        // this.firebaseService.getTripInfo().then((result)=> {
        //     console.log("Thanks page has received...", result);
        //     console.log(Object.keys(result));
        //     for (let key in result) {
        //         // skip loop if the property is from prototype
        //         if (!result.hasOwnProperty(key)) continue;
        //         let obj = result[key];
        //         console.log(obj);
        //         let today = moment().format("YYYY-MM-DD");
        //         let lastWeek = moment().subtract(7,'d').format('YYYY-MM-DD');
        //         let lastMonth = moment().subtract(1, 'month').format('YYYY-MM-DD');
        //         let now = today.toString();
        //         if(obj.date === now) {
        //             this.trip.destination = obj.destination;
        //             this.trip.origin = obj.origin;
        //             this.trip.travelTime = obj.travelTime;
        //             this.trip.distanceTraveled = obj.distanceTraveled;
        //             this.trip.averageSpeed = obj.distanceTraveled;
        //             this.trip.pointsEarned = obj.pointsEarned;
        //             this.trip.date = obj.date;
        //             this.trips.push(this.trip);
        //         }
        //         if(moment(obj.date).isSameOrAfter(lastWeek)) {
        //             this.trip.destination = obj.destination;
        //             this.trip.origin = obj.origin;
        //             this.trip.travelTime = obj.travelTime;
        //             this.trip.distanceTraveled = obj.distanceTraveled;
        //             this.trip.averageSpeed = obj.distanceTraveled;
        //             this.trip.pointsEarned = obj.pointsEarned;
        //             this.trip.date = obj.date;
        //             this.trip.week = true;
        //             this.trips.push(this.trip);
        //         }
        //         if(moment(obj.date).isSameOrAfter(lastMonth)) {
        //             this.trip.destination = obj.destination;
        //             this.trip.origin = obj.origin;
        //             this.trip.travelTime = obj.travelTime;
        //             this.trip.distanceTraveled = obj.distanceTraveled;
        //             this.trip.averageSpeed = obj.distanceTraveled;
        //             this.trip.pointsEarned = obj.pointsEarned;
        //             this.trip.date = obj.date;
        //             this.trip.month = true;
        //             this.trips.push(this.trip);
        //         }
        //     }
        // });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZWVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZGVlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkU7QUFFM0UsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFFekUsdUNBQXFDO0FBUXJDO0lBaUJJLHlCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsS0FBcUI7UUFIckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWxCekMsU0FBSSxHQUFHO1lBQ0gsV0FBVyxFQUFFLEVBQUU7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxFQUFFO1lBQ2QsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsRUFBRTtZQUNoQixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBQ0YsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQVFYLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBb0RDO1FBbkRHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCwwQ0FBMEM7UUFDMUMsdURBQXVEO1FBQ3ZELDBEQUEwRDtRQUMxRCx3Q0FBd0M7UUFDeEMsZ0NBQWdDO1FBQ2hDLHlEQUF5RDtRQUN6RCxxREFBcUQ7UUFDckQsaUNBQWlDO1FBQ2pDLDRCQUE0QjtRQUM1QixxREFBcUQ7UUFDckQsd0VBQXdFO1FBQ3hFLDhFQUE4RTtRQUM5RSxzQ0FBc0M7UUFDdEMsaUNBQWlDO1FBQ2pDLHVEQUF1RDtRQUN2RCw2Q0FBNkM7UUFDN0MscURBQXFEO1FBQ3JELGlFQUFpRTtRQUNqRSw2REFBNkQ7UUFDN0QseURBQXlEO1FBQ3pELHlDQUF5QztRQUN6QywwQ0FBMEM7UUFDMUMsWUFBWTtRQUNaLHlEQUF5RDtRQUN6RCx1REFBdUQ7UUFDdkQsNkNBQTZDO1FBQzdDLHFEQUFxRDtRQUNyRCxpRUFBaUU7UUFDakUsNkRBQTZEO1FBQzdELHlEQUF5RDtRQUN6RCx5Q0FBeUM7UUFDekMscUNBQXFDO1FBQ3JDLDBDQUEwQztRQUMxQyxZQUFZO1FBQ1osMERBQTBEO1FBQzFELHVEQUF1RDtRQUN2RCw2Q0FBNkM7UUFDN0MscURBQXFEO1FBQ3JELGlFQUFpRTtRQUNqRSw2REFBNkQ7UUFDN0QseURBQXlEO1FBQ3pELHlDQUF5QztRQUN6QyxzQ0FBc0M7UUFDdEMsMENBQTBDO1FBQzFDLFlBQVk7UUFDWixRQUFRO1FBQ1IsTUFBTTtJQUNWLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDakMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbkdRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsa0NBQWUsQ0FBQztZQUN6QyxXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLDJCQUEyQixDQUFDO1NBQy9FLENBQUM7eUNBa0I4QixlQUFNO1lBQ0csa0NBQWU7WUFDbkIsMEJBQVc7WUFDakIsdUJBQWM7T0FwQmhDLGVBQWUsQ0FxRzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXJHRCxJQXFHQztBQXJHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhY2tncm91bmRHZW9sb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWdlb2xvY2F0aW9uLWx0XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInJlZGVlbVwiLFxuICAgIHByb3ZpZGVyczogW1RyaXBTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvcmVkZWVtL3JlZGVlbS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL3JlZGVlbS9yZWRlZW0tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvcmVkZWVtL3JlZGVlbS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUmVkZWVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgdHJpcCA9IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcnLFxuICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICB0cmF2ZWxUaW1lOiAnJyxcbiAgICAgICAgZGlzdGFuY2VUcmF2ZWxlZDogJycsXG4gICAgICAgIGF2ZXJhZ2VTcGVlZDogJycsXG4gICAgICAgIHBvaW50c0Vhcm5lZDogJycsXG4gICAgICAgIGRhdGU6ICcnLFxuICAgICAgICB3ZWVrOiBmYWxzZSxcbiAgICAgICAgbW9udGg6IGZhbHNlXG4gICAgfTtcbiAgICB0cmlwcyA9IFtdO1xuICAgIHVzZXI7XG4gICAgcGFydG5lcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpe1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXJ0bmVyID0gcGFyYW1zWydwYXJ0bmVyJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhcnRuZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy50cmlwU2VydmljZS5nZXRQb2ludHNGcm9tVHJpcERCKCk7XG4gICAgICAgIC8vIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRyaXBJbmZvKCkudGhlbigocmVzdWx0KT0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVGhhbmtzIHBhZ2UgaGFzIHJlY2VpdmVkLi4uXCIsIHJlc3VsdCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhyZXN1bHQpKTtcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgLy8gICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgIC8vICAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgICAgIC8vICAgICAgICAgbGV0IG9iaiA9IHJlc3VsdFtrZXldO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICAgIC8vICAgICAgICAgbGV0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgbGFzdFdlZWsgPSBtb21lbnQoKS5zdWJ0cmFjdCg3LCdkJykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGxhc3RNb250aCA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAvLyAgICAgICAgIGxldCBub3cgPSB0b2RheS50b1N0cmluZygpO1xuICAgICAgICAvLyAgICAgICAgIGlmKG9iai5kYXRlID09PSBub3cpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwcy5wdXNoKHRoaXMudHJpcCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKG1vbWVudChvYmouZGF0ZSkuaXNTYW1lT3JBZnRlcihsYXN0V2VlaykpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLndlZWsgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXBzLnB1c2godGhpcy50cmlwKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYobW9tZW50KG9iai5kYXRlKS5pc1NhbWVPckFmdGVyKGxhc3RNb250aCkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLm1vbnRoID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwcy5wdXNoKHRoaXMudHJpcCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBzaGFyZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHlvdXJSYW5rKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgcmVkZWVtKCl7XG4gICAgICAgIHRoaXMudHJpcC5wb2ludHNFYXJuZWQgPSBcIi0xMDAwXCI7XG4gICAgICAgIGxldCBwb2ludHMgPSBOdW1iZXIodGhpcy50cmlwLnBvaW50c0Vhcm5lZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmVnYXRpdmUgcG9pbnRzLCByaWdodD9cIiwgcG9pbnRzKTtcbiAgICAgICAgdGhpcy50cmlwU2VydmljZS5nZXRQb2ludHNGcm9tVHJpcERCKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1bSBpcyBub3cuLi5cIiwgcmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPiBwb2ludHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZWRlZW1Qb2ludHMocG9pbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJOb3QgZW5vdWdoIHBvaW50cyFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG59Il19