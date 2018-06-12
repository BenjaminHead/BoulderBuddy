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
        // if(this.firebaseService.getUser()) {
        //     router.navigate(["/login"]);
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdUVBQXFFO0FBQ3JFLDBDQUF5QztBQU16QztJQUNJLHNCQUFvQixlQUFnQyxFQUN4QyxNQUFjO1FBRE4sb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRWhELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBVSxJQUFLLE9BQUE7WUFDaEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUhtRCxDQUduRCxDQUFDLENBQUM7UUFDSCx1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLElBQUk7SUFDUixDQUFDO0lBVlEsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLDJDQUEyQztTQUN4RCxDQUFDO3lDQUV1QyxrQ0FBZTtZQUNoQyxlQUFNO09BRmpCLFlBQVksQ0FXeEI7SUFBRCxtQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm1haW5cIixcbiAgICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICByb3V0ZXI6IFJvdXRlcil7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKS50aGVuKChyZXN1bHQ6YW55KSA9PiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IHVzZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldoYXQncyB0aGUgcmVzdWx0IG5vdz9cIiwgdXNlcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZih0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyKCkpIHtcbiAgICAgICAgLy8gICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgICAgICAvLyB9XG4gICAgfVxufSJdfQ==