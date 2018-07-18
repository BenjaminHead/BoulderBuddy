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
                var today = moment().format("YYYY-MM-DD");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFDekUsK0JBQWlDO0FBQ2pDLHVDQUFxQztBQVFyQztJQWNJLHlCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsS0FBcUI7UUFIckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQWZ6QyxTQUFJLEdBQUc7WUFDSCxXQUFXLEVBQUUsRUFBRTtZQUNmLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7WUFDZCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQztJQVFGLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBNkJDO1FBNUJHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLDhDQUE4QztnQkFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUFDLFFBQVEsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNsQixLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO29CQUN4QyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO29CQUM5QixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO29CQUN0QyxLQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO29CQUM5QyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO29CQUMxQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUM5QixDQUFDO2dCQUNELDBCQUEwQjtnQkFDMUIscURBQXFEO2dCQUNyRCw4Q0FBOEM7Z0JBQzlDLEVBQUU7Z0JBQ0YsbUJBQW1CO2dCQUNuQiw2Q0FBNkM7Z0JBQzdDLElBQUk7WUFDUixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBN0RRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsa0NBQWUsQ0FBQztZQUN6QyxXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLDJCQUEyQixDQUFDO1NBQy9FLENBQUM7eUNBZThCLGVBQU07WUFDRyxrQ0FBZTtZQUNuQiwwQkFBVztZQUNqQix1QkFBYztPQWpCaEMsZUFBZSxDQStEM0I7SUFBRCxzQkFBQztDQUFBLEFBL0RELElBK0RDO0FBL0RZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcFwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aGFua3NcIixcbiAgICBwcm92aWRlcnM6IFtUcmlwU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy90aGFua3MvdGhhbmtzLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRoYW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHRyaXAgPSB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgdHJhdmVsVGltZTogJycsXG4gICAgICAgIGRpc3RhbmNlVHJhdmVsZWQ6ICcnLFxuICAgICAgICBhdmVyYWdlU3BlZWQ6ICcnLFxuICAgICAgICBwb2ludHNFYXJuZWQ6ICcnLFxuICAgICAgICBkYXRlOiAnJ1xuICAgIH07XG4gICAgdHJpcHM7XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpe1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRUcmlwSW5mbygpLnRoZW4oKHJlc3VsdCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoYW5rcyBwYWdlIGhhcyByZWNlaXZlZC4uLlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMocmVzdWx0KSk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Lmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSByZXN1bHRba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgICAgICAgICAgICAgIGxldCB0b2RheSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICAgICAgICAgICAgbGV0IG5vdyA9IHRvZGF5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYob2JqLmRhdGUgPT09IG5vdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGVzdGluYXRpb24gPSBvYmouZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5vcmlnaW4gPSBvYmoub3JpZ2luO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAudHJhdmVsVGltZSA9IG9iai50cmF2ZWxUaW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGlzdGFuY2VUcmF2ZWxlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuYXZlcmFnZVNwZWVkID0gb2JqLmRpc3RhbmNlVHJhdmVsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpcC5wb2ludHNFYXJuZWQgPSBvYmoucG9pbnRzRWFybmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGF0ZSA9IG9iai5kYXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCB0cmlwIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkodHJpcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHlvdXIgY29kZVxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0cmlwICsgXCIgPSBcIiArIG9ialt0cmlwXSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaGFyZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHlvdXJSYW5rKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgcmVkZWVtKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG59Il19