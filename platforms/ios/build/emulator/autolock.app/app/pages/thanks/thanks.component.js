"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
var ThanksComponent = /** @class */ (function () {
    function ThanksComponent(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.firebaseService.getUser().then(function (result) { return function () {
            this.user = result;
            this.firebaseService.getTripInfo(this.user.id).then(function (result) { return function () {
                this.trip.travelTime = '';
                this.trip.distanceTraveled = '';
                this.trip.averageSpeed = '';
                this.trip.pointsEarned = '';
                this.trip.week = true;
                this.trip.month = true;
            }; });
        }; });
    }
    ThanksComponent.prototype.share = function () {
        this.router.navigate(["/"]);
    };
    ThanksComponent.prototype.yourRank = function () {
        this.router.navigate(["/"]);
    };
    ThanksComponent.prototype.redeem = function () {
        this.router.navigate(["/"]);
    };
    ThanksComponent = __decorate([
        core_1.Component({
            selector: "thanks",
            moduleId: module.id,
            templateUrl: "./thanks.html",
            styleUrls: ["./thanks-common.css", "./thanks.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService])
    ], ThanksComponent);
    return ThanksComponent;
}());
exports.ThanksComponent = ThanksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsMENBQXlDO0FBR3pDLDJFQUF5RTtBQVF6RTtJQUtJLHlCQUFvQixNQUFjLEVBQ2QsZUFBZ0M7UUFEaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBO1lBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUE7Z0JBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMzQixDQUFDLEVBUCtELENBTy9ELENBQUMsQ0FBQztRQUNQLENBQUMsRUFWK0MsQ0FVL0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQTlCUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDO1NBQ3JELENBQUM7eUNBTThCLGVBQU07WUFDRyxrQ0FBZTtPQU4zQyxlQUFlLENBZ0MzQjtJQUFELHNCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwXCI7XG5pbXBvcnQgeyBUcmlwU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHJpcC90cmlwLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aGFua3NcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGhhbmtzLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdGhhbmtzLWNvbW1vbi5jc3NcIiwgXCIuL3RoYW5rcy5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGhhbmtzQ29tcG9uZW50IHtcblxuICAgIHRyaXA6IFRyaXA7XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSkge1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyKCkudGhlbigocmVzdWx0KSA9PiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VHJpcEluZm8odGhpcy51c2VyLmlkKS50aGVuKChyZXN1bHQpID0+IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXAuZGlzdGFuY2VUcmF2ZWxlZCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcC5hdmVyYWdlU3BlZWQgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlwLndlZWsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcC5tb250aCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hhcmUoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgfVxuXG4gICAgeW91clJhbmsoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgfVxuXG4gICAgcmVkZWVtKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgIH1cblxufSJdfQ==