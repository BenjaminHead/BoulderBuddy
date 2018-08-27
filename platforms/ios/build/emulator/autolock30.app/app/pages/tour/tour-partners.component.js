"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TourPartnersComponent = /** @class */ (function () {
    function TourPartnersComponent(router) {
        this.router = router;
        this.component = '';
        this.component = 'partners';
        console.log(this.component);
    }
    TourPartnersComponent.prototype.nextTab = function () {
        this.router.navigate(["/login"]);
    };
    TourPartnersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'seed-partners',
            templateUrl: './tour-partners.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styleUrls: ['./tour-common.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TourPartnersComponent);
    return TourPartnersComponent;
}());
exports.TourPartnersComponent = TourPartnersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1wYXJ0bmVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3VyLXBhcnRuZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUNuRSwwQ0FBeUM7QUFVekM7SUFHSSwrQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGM0IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdsQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sdUNBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBVlEscUJBQXFCO1FBUmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtZQUMvQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDO3lDQUs4QixlQUFNO09BSHpCLHFCQUFxQixDQVdqQztJQUFELDRCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2VlZC1wYXJ0bmVycycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RvdXItcGFydG5lcnMuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc3R5bGVVcmxzOiBbJy4vdG91ci1jb21tb24uY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBUb3VyUGFydG5lcnNDb21wb25lbnQge1xuICAgIHB1YmxpYyBjb21wb25lbnQgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSAncGFydG5lcnMnO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5leHRUYWIoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgfVxufSJdfQ==