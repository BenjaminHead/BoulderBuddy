"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ThanksComponent = /** @class */ (function () {
    function ThanksComponent(router) {
        this.router = router;
        this.trip.travelTime = '';
        this.trip.distanceTraveled = '';
        this.trip.averageSpeed = '';
        this.trip.pointsEarned = '';
        this.trip.week = true;
        this.trip.month = true;
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
        __metadata("design:paramtypes", [router_1.Router])
    ], ThanksComponent);
    return ThanksComponent;
}());
exports.ThanksComponent = ThanksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsMENBQXlDO0FBVXpDO0lBSUkseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQXZCUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDO1NBQ3JELENBQUM7eUNBSzhCLGVBQU07T0FKekIsZUFBZSxDQXlCM0I7SUFBRCxzQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFja2dyb3VuZEdlb2xvY2F0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtZ2VvbG9jYXRpb24tbHRcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcFwiO1xuaW1wb3J0IHsgVHJpcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRoYW5rc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90aGFua3MuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90aGFua3MtY29tbW9uLmNzc1wiLCBcIi4vdGhhbmtzLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBUaGFua3NDb21wb25lbnQge1xuXG4gICAgdHJpcDogVHJpcDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy50cmlwLnRyYXZlbFRpbWUgPSAnJztcbiAgICAgICAgdGhpcy50cmlwLmRpc3RhbmNlVHJhdmVsZWQgPSAnJztcbiAgICAgICAgdGhpcy50cmlwLmF2ZXJhZ2VTcGVlZCA9ICcnO1xuICAgICAgICB0aGlzLnRyaXAucG9pbnRzRWFybmVkID0gJyc7XG4gICAgICAgIHRoaXMudHJpcC53ZWVrID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cmlwLm1vbnRoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzaGFyZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICB9XG5cbiAgICB5b3VyUmFuaygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICB9XG5cbiAgICByZWRlZW0oKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgfVxuXG59Il19