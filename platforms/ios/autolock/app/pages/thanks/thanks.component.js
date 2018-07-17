"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_service_1 = require("../../shared/trip/trip.service");
var firebase_service_1 = require("../../shared/services/firebase.service");
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
            date: ''
        };
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
                var today = new Date;
                var now = today.toString();
                if (obj.date === now) {
                    _this.trip.destination = obj.destination;
                    _this.trip.origin = obj.origin;
                    _this.trip.travelTime = obj.travelTime;
                    _this.trip.distanceTraveled = obj.distanceTraveled;
                    _this.trip.averageSpeed = obj.distanceTraveled;
                    _this.trip.pointsEarned = obj.pointsEarned;
                    _this.trip.date = obj.date;
                }
                // for (let trip in obj) {
                //     // skip loop if the property is from prototype
                //     if(!obj.hasOwnProperty(trip)) continue;
                //
                //     // your code
                //     console.log(trip + " = " + obj[trip]);
                // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFDekUsdUNBQXFDO0FBUXJDO0lBY0kseUJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixLQUFxQjtRQUhyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBZnpDLFNBQUksR0FBRztZQUNILFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFDO0lBUUYsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkE2QkM7UUE1QkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDckIsOENBQThDO2dCQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQUMsUUFBUSxDQUFDO2dCQUMxQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDO2dCQUNyQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztvQkFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztvQkFDOUIsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDdEMsS0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDOUMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDMUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDOUIsQ0FBQztnQkFDRCwwQkFBMEI7Z0JBQzFCLHFEQUFxRDtnQkFDckQsOENBQThDO2dCQUM5QyxFQUFFO2dCQUNGLG1CQUFtQjtnQkFDbkIsNkNBQTZDO2dCQUM3QyxJQUFJO1lBQ1IsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQTdEUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLGtDQUFlLENBQUM7WUFDekMsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSwyQkFBMkIsQ0FBQztTQUMvRSxDQUFDO3lDQWU4QixlQUFNO1lBQ0csa0NBQWU7WUFDbkIsMEJBQVc7WUFDakIsdUJBQWM7T0FqQmhDLGVBQWUsQ0ErRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFja2dyb3VuZEdlb2xvY2F0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtZ2VvbG9jYXRpb24tbHRcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90cmlwL3RyaXAuc2VydmljZVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRoYW5rc1wiLFxuICAgIHByb3ZpZGVyczogW1RyaXBTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvdGhhbmtzL3RoYW5rcy5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MtY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvdGhhbmtzL3RoYW5rcy5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGhhbmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgdHJpcCA9IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcnLFxuICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICB0cmF2ZWxUaW1lOiAnJyxcbiAgICAgICAgZGlzdGFuY2VUcmF2ZWxlZDogJycsXG4gICAgICAgIGF2ZXJhZ2VTcGVlZDogJycsXG4gICAgICAgIHBvaW50c0Vhcm5lZDogJycsXG4gICAgICAgIGRhdGU6ICcnXG4gICAgfTtcbiAgICB0cmlwcztcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdHJpcFNlcnZpY2U6IFRyaXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCl7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRyaXBJbmZvKCkudGhlbigocmVzdWx0KT0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhhbmtzIHBhZ2UgaGFzIHJlY2VpdmVkLi4uXCIsIHJlc3VsdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhyZXN1bHQpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHJlc3VsdFtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGU7XG4gICAgICAgICAgICAgICAgbGV0IG5vdyA9IHRvZGF5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYob2JqLmRhdGUgPT09IG5vdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGVzdGluYXRpb24gPSBvYmouZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5vcmlnaW4gPSBvYmoub3JpZ2luO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAudHJhdmVsVGltZSA9IG9iai50cmF2ZWxUaW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGlzdGFuY2VUcmF2ZWxlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuYXZlcmFnZVNwZWVkID0gb2JqLmRpc3RhbmNlVHJhdmVsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5wb2ludHNFYXJuZWQgPSBvYmoucG9pbnRzRWFybmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGF0ZSA9IG9iai5kYXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCB0cmlwIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkodHJpcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHlvdXIgY29kZVxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0cmlwICsgXCIgPSBcIiArIG9ialt0cmlwXSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaGFyZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHlvdXJSYW5rKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgcmVkZWVtKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG59Il19