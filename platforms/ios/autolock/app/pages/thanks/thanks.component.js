"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_service_1 = require("../../shared/trip/trip.service");
var firebase_service_1 = require("../../shared/services/firebase.service");
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
        this.tripService.showFirebaseTripResponse();
        this.firebaseService.getTripInfo();
    };
    // getTripData(){
    //     this.firebaseService.getTripInfo().then((result)=>{
    //         console.log("Get trip data result...", result);
    //         return result;
    //     });
    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlEO0FBRXpELCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFRekU7SUFhSSx5QkFBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLEtBQXFCO1FBSHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFkekMsU0FBSSxHQUFHO1lBQ0gsV0FBVyxFQUFFLEVBQUU7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxFQUFFO1lBQ2QsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsRUFBRTtZQUNoQixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUM7SUFPRixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsMERBQTBEO0lBQzFELDBEQUEwRDtJQUMxRCx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLElBQUk7SUFFSiwrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUF6Q1EsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxrQ0FBZSxDQUFDO1lBQ3pDLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLEVBQUUsMkJBQTJCLENBQUM7U0FDL0UsQ0FBQzt5Q0FjOEIsZUFBTTtZQUNHLGtDQUFlO1lBQ25CLDBCQUFXO1lBQ2pCLHVCQUFjO09BaEJoQyxlQUFlLENBMkMzQjtJQUFELHNCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhY2tncm91bmRHZW9sb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWdlb2xvY2F0aW9uLWx0XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aGFua3NcIixcbiAgICBwcm92aWRlcnM6IFtUcmlwU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy90aGFua3MvdGhhbmtzLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRoYW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIHRyaXAgPSB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgdHJhdmVsVGltZTogJycsXG4gICAgICAgIGRpc3RhbmNlVHJhdmVsZWQ6ICcnLFxuICAgICAgICBhdmVyYWdlU3BlZWQ6ICcnLFxuICAgICAgICBwb2ludHNFYXJuZWQ6ICcnLFxuICAgICAgICBkYXRlOiAnJ1xuICAgIH07XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpe1xuICAgICAgICB0aGlzLnRyaXBTZXJ2aWNlLnNob3dGaXJlYmFzZVRyaXBSZXNwb25zZSgpO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRUcmlwSW5mbygpO1xuICAgIH1cblxuICAgIC8vIGdldFRyaXBEYXRhKCl7XG4gICAgLy8gICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRyaXBJbmZvKCkudGhlbigocmVzdWx0KT0+e1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgdHJpcCBkYXRhIHJlc3VsdC4uLlwiLCByZXN1bHQpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgc2hhcmUoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgICB9XG5cbiAgICB5b3VyUmFuaygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHJlZGVlbSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxufSJdfQ==