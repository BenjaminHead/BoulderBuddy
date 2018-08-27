"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_service_1 = require("../../shared/trip/trip.service");
var firebase_service_1 = require("../../shared/services/firebase.service");
require("rxjs/add/operator/toPromise");
var Partner = /** @class */ (function () {
    function Partner(name) {
        this.name = name;
    }
    return Partner;
}());
var PartnersComponent = /** @class */ (function () {
    function PartnersComponent(router, firebaseService, tripService, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.tripService = tripService;
        this.route = route;
        this.localPartners = [];
        this.partners = [
            "Red Fuego",
            "Oishii Sushi",
            "Kneaders",
            "Rancherito's"
        ];
        for (var i = 0; i < this.partners.length; i++) {
            this.localPartners.push(new Partner(this.partners[i]));
        }
    }
    PartnersComponent.prototype.ngOnInit = function () {
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
    PartnersComponent.prototype.share = function () {
        this.router.navigate([""]);
    };
    PartnersComponent.prototype.yourRank = function () {
        this.router.navigate([""]);
    };
    PartnersComponent.prototype.redeem = function (partners) {
        this.router.navigate(["/redeem"], { queryParams: {
                'partner': partners
            }
        });
    };
    PartnersComponent = __decorate([
        core_1.Component({
            selector: "redeem-partners",
            providers: [trip_service_1.TripService, firebase_service_1.FirebaseService],
            templateUrl: "./pages/partners/partners.html",
            styleUrls: ["./pages/partners/partners-common.css", "./pages/partners/partners.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            trip_service_1.TripService,
            router_1.ActivatedRoute])
    ], PartnersComponent);
    return PartnersComponent;
}());
exports.PartnersComponent = PartnersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydG5lcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFydG5lcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBRTNFLDBDQUF5RDtBQUV6RCwrREFBNkQ7QUFDN0QsMkVBQXlFO0FBRXpFLHVDQUFxQztBQUVyQztJQUNJLGlCQUFtQixJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztJQUFHLENBQUM7SUFDdEMsY0FBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQ7SUFXSSwyQkFBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLEtBQXFCO1FBSHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFaekMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFHO1lBQ1AsV0FBVztZQUNYLGNBQWM7WUFDZCxVQUFVO1lBQ1YsY0FBYztTQUNiLENBQUM7UUFPRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksMENBQTBDO1FBQzFDLHVEQUF1RDtRQUN2RCwwREFBMEQ7UUFDMUQsd0NBQXdDO1FBQ3hDLGdDQUFnQztRQUNoQyx5REFBeUQ7UUFDekQscURBQXFEO1FBQ3JELGlDQUFpQztRQUNqQyw0QkFBNEI7UUFDNUIscURBQXFEO1FBQ3JELHdFQUF3RTtRQUN4RSw4RUFBOEU7UUFDOUUsc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUNqQyx1REFBdUQ7UUFDdkQsNkNBQTZDO1FBQzdDLHFEQUFxRDtRQUNyRCxpRUFBaUU7UUFDakUsNkRBQTZEO1FBQzdELHlEQUF5RDtRQUN6RCx5Q0FBeUM7UUFDekMsMENBQTBDO1FBQzFDLFlBQVk7UUFDWix5REFBeUQ7UUFDekQsdURBQXVEO1FBQ3ZELDZDQUE2QztRQUM3QyxxREFBcUQ7UUFDckQsaUVBQWlFO1FBQ2pFLDZEQUE2RDtRQUM3RCx5REFBeUQ7UUFDekQseUNBQXlDO1FBQ3pDLHFDQUFxQztRQUNyQywwQ0FBMEM7UUFDMUMsWUFBWTtRQUNaLDBEQUEwRDtRQUMxRCx1REFBdUQ7UUFDdkQsNkNBQTZDO1FBQzdDLHFEQUFxRDtRQUNyRCxpRUFBaUU7UUFDakUsNkRBQTZEO1FBQzdELHlEQUF5RDtRQUN6RCx5Q0FBeUM7UUFDekMsc0NBQXNDO1FBQ3RDLDBDQUEwQztRQUMxQyxZQUFZO1FBQ1osUUFBUTtRQUNSLE1BQU07SUFDVixDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLFFBQVE7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFO2dCQUM1QyxTQUFTLEVBQUUsUUFBUTthQUN0QjtTQUNBLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuRlEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsa0NBQWUsQ0FBQztZQUN6QyxXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLCtCQUErQixDQUFDO1NBQ3ZGLENBQUM7eUNBWThCLGVBQU07WUFDRyxrQ0FBZTtZQUNuQiwwQkFBVztZQUNqQix1QkFBYztPQWRoQyxpQkFBaUIsQ0FxRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJGRCxJQXFGQztBQXJGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcFwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5jbGFzcyBQYXJ0bmVyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTpzdHJpbmcpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInJlZGVlbS1wYXJ0bmVyc1wiLFxuICAgIHByb3ZpZGVyczogW1RyaXBTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvcGFydG5lcnMvcGFydG5lcnMuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9wYXJ0bmVycy9wYXJ0bmVycy1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9wYXJ0bmVycy9wYXJ0bmVycy5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGFydG5lcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBsb2NhbFBhcnRuZXJzID0gW107XG4gICAgcGFydG5lcnMgPSBbXG4gICAgICAgIFwiUmVkIEZ1ZWdvXCIsXG4gICAgICAgIFwiT2lzaGlpIFN1c2hpXCIsXG4gICAgICAgIFwiS25lYWRlcnNcIixcbiAgICAgICAgXCJSYW5jaGVyaXRvJ3NcIlxuICAgICAgICBdO1xuICAgIHVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmlwU2VydmljZTogVHJpcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsUGFydG5lcnMucHVzaChuZXcgUGFydG5lcih0aGlzLnBhcnRuZXJzW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKXtcbiAgICAgICAgLy8gdGhpcy50cmlwU2VydmljZS5nZXRQb2ludHNGcm9tVHJpcERCKCk7XG4gICAgICAgIC8vIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRyaXBJbmZvKCkudGhlbigocmVzdWx0KT0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVGhhbmtzIHBhZ2UgaGFzIHJlY2VpdmVkLi4uXCIsIHJlc3VsdCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhyZXN1bHQpKTtcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgLy8gICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgIC8vICAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgICAgIC8vICAgICAgICAgbGV0IG9iaiA9IHJlc3VsdFtrZXldO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICAgIC8vICAgICAgICAgbGV0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgbGFzdFdlZWsgPSBtb21lbnQoKS5zdWJ0cmFjdCg3LCdkJykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGxhc3RNb250aCA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAvLyAgICAgICAgIGxldCBub3cgPSB0b2RheS50b1N0cmluZygpO1xuICAgICAgICAvLyAgICAgICAgIGlmKG9iai5kYXRlID09PSBub3cpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwcy5wdXNoKHRoaXMudHJpcCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKG1vbWVudChvYmouZGF0ZSkuaXNTYW1lT3JBZnRlcihsYXN0V2VlaykpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLndlZWsgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXBzLnB1c2godGhpcy50cmlwKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYobW9tZW50KG9iai5kYXRlKS5pc1NhbWVPckFmdGVyKGxhc3RNb250aCkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRlc3RpbmF0aW9uID0gb2JqLmRlc3RpbmF0aW9uO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAub3JpZ2luID0gb2JqLm9yaWdpbjtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSBvYmoudHJhdmVsVGltZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSBvYmouZGlzdGFuY2VUcmF2ZWxlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9IG9iai5kaXN0YW5jZVRyYXZlbGVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gb2JqLnBvaW50c0Vhcm5lZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLmRhdGUgPSBvYmouZGF0ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwLm1vbnRoID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy50cmlwcy5wdXNoKHRoaXMudHJpcCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBzaGFyZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHlvdXJSYW5rKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgcmVkZWVtKHBhcnRuZXJzKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZGVlbVwiXSwge3F1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAncGFydG5lcic6IHBhcnRuZXJzXG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19