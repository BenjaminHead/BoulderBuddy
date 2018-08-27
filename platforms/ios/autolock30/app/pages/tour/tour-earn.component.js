"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TourEarnComponent = /** @class */ (function () {
    function TourEarnComponent(router) {
        this.router = router;
        this.component = '';
        this.component = 'earn';
        console.log(this.component);
    }
    TourEarnComponent.prototype.nextTab = function () {
        this.router.navigate(["/partners"]);
    };
    TourEarnComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'seed-earn',
            templateUrl: './tour-earn.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styleUrls: ['./tour-common.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TourEarnComponent);
    return TourEarnComponent;
}());
exports.TourEarnComponent = TourEarnComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1lYXJuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvdXItZWFybi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFDbkUsMENBQXlDO0FBVXpDO0lBR0ksMkJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRjNCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFHbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLG1DQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQVZRLGlCQUFpQjtRQVI3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07WUFDL0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0FLOEIsZUFBTTtPQUh6QixpQkFBaUIsQ0FXN0I7SUFBRCx3QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NlZWQtZWFybicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RvdXItZWFybi5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzdHlsZVVybHM6IFsnLi90b3VyLWNvbW1vbi5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRvdXJFYXJuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgY29tcG9uZW50ID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gJ2Vhcm4nO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5leHRUYWIoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wYXJ0bmVyc1wiXSk7XG4gICAgfVxufSJdfQ==