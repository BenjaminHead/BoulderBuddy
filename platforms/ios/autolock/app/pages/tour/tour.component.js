"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TourComponent = /** @class */ (function () {
    function TourComponent() {
        this.component = '';
        this.component = 'lock';
    }
    TourComponent.prototype.nextTab = function (tab) {
        this.component = tab;
    };
    TourComponent = __decorate([
        core_1.Component({
            selector: "tour",
            moduleId: module.id,
            templateUrl: "./tour.html",
            styleUrls: ["./tour-common.css", "./tour.css"]
        }),
        __metadata("design:paramtypes", [])
    ], TourComponent);
    return TourComponent;
}());
exports.TourComponent = TourComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQVMxQztJQUdJO1FBRk8sY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdsQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLEdBQUc7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBVFEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztTQUNqRCxDQUFDOztPQUVXLGFBQWEsQ0FVekI7SUFBRCxvQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidG91clwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90b3VyLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdG91ci1jb21tb24uY3NzXCIsIFwiLi90b3VyLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFRvdXJDb21wb25lbnQge1xuICAgIHB1YmxpYyBjb21wb25lbnQgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9ICdsb2NrJztcbiAgICB9XG5cbiAgICBwdWJsaWMgbmV4dFRhYih0YWIpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSB0YWI7XG4gICAgfVxufSJdfQ==