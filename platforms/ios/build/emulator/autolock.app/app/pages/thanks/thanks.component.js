"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trip_service_1 = require("../../shared/trip/trip.service");
var firebase_service_1 = require("../../shared/services/firebase.service");
var ThanksComponent = /** @class */ (function () {
    function ThanksComponent(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.trip = {
            travelTime: '',
            distanceTraveled: '',
            averageSpeed: '',
            pointsEarned: '',
            week: '',
            month: '',
        };
        console.log("We're in the Thanks Component");
        this.firebaseService.getTripInfo().then(function (result) { return function () {
            console.log("trip object contains...", result);
            this.trip.travelTime = '';
            this.trip.distanceTraveled = '';
            this.trip.averageSpeed = '';
            this.trip.pointsEarned = '';
            this.trip.week = true;
            this.trip.month = true;
        }; });
    }
    // ngOnInit (){
    //     //
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
            firebase_service_1.FirebaseService])
    ], ThanksComponent);
    return ThanksComponent;
}());
exports.ThanksComponent = ThanksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlDO0FBRXpDLCtEQUE2RDtBQUM3RCwyRUFBeUU7QUFRekU7SUFZSSx5QkFBb0IsTUFBYyxFQUNkLGVBQWdDO1FBRGhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFYcEQsU0FBSSxHQUFHO1lBQ0gsVUFBVSxFQUFFLEVBQUU7WUFDZCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBS0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUE7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFSbUQsQ0FRbkQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGVBQWU7SUFDZixTQUFTO0lBQ1QsSUFBSTtJQUVKLCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXhDUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLGtDQUFlLENBQUM7WUFDekMsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSwyQkFBMkIsQ0FBQztTQUMvRSxDQUFDO3lDQWE4QixlQUFNO1lBQ0csa0NBQWU7T0FiM0MsZUFBZSxDQTBDM0I7SUFBRCxzQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aGFua3NcIixcbiAgICBwcm92aWRlcnM6IFtUcmlwU2VydmljZSwgRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy90aGFua3MvdGhhbmtzLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL3RoYW5rcy90aGFua3MuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRoYW5rc0NvbXBvbmVudCB7XG5cbiAgICB0cmlwID0ge1xuICAgICAgICB0cmF2ZWxUaW1lOiAnJyxcbiAgICAgICAgZGlzdGFuY2VUcmF2ZWxlZDogJycsXG4gICAgICAgIGF2ZXJhZ2VTcGVlZDogJycsXG4gICAgICAgIHBvaW50c0Vhcm5lZDogJycsXG4gICAgICAgIHdlZWs6ICcnLFxuICAgICAgICBtb250aDogJycsXG4gICAgfTtcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2UncmUgaW4gdGhlIFRoYW5rcyBDb21wb25lbnRcIik7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRyaXBJbmZvKCkudGhlbigocmVzdWx0KSA9PiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlwIG9iamVjdCBjb250YWlucy4uLlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMudHJpcC5kaXN0YW5jZVRyYXZlbGVkID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRyaXAuYXZlcmFnZVNwZWVkID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRyaXAud2VlayA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRyaXAubW9udGggPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBuZ09uSW5pdCAoKXtcbiAgICAvLyAgICAgLy9cbiAgICAvLyB9XG5cbiAgICBzaGFyZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgIH1cblxuICAgIHlvdXJSYW5rKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG4gICAgcmVkZWVtKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gICAgfVxuXG59Il19