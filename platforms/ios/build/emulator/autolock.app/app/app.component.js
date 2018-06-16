"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase_service_1 = require("./shared/services/firebase.service");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.firebaseService.getUser().then(function (result) { return function () {
            var user = result;
            console.log("What's the result now?", user);
        }; });
        if (this.firebaseService.getUser()) {
            router.navigate(["/login"]);
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [firebase_service_1.FirebaseService,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdUVBQXFFO0FBQ3JFLDBDQUF5QztBQU16QztJQUNJLHNCQUFvQixlQUFnQyxFQUN4QyxNQUFjO1FBRE4sb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRWhELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBVSxJQUFLLE9BQUE7WUFDaEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUhtRCxDQUduRCxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQVZRLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSwyQ0FBMkM7U0FDeEQsQ0FBQzt5Q0FFdUMsa0NBQWU7WUFDaEMsZUFBTTtPQUZqQixZQUFZLENBV3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJtYWluXCIsXG4gICAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcm91dGVyOiBSb3V0ZXIpe1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyKCkudGhlbigocmVzdWx0OmFueSkgPT4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCB1c2VyID0gcmVzdWx0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaGF0J3MgdGhlIHJlc3VsdCBub3c/XCIsIHVzZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpKSB7XG4gICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=