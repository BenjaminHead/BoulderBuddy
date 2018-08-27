"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
var RecoverPasswordComponent = /** @class */ (function () {
    function RecoverPasswordComponent(router, userService, firebaseService) {
        this.router = router;
        this.userService = userService;
        this.firebaseService = firebaseService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "nativescriptrocks@telerik.com";
        this.user.password = "password";
    }
    RecoverPasswordComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    RecoverPasswordComponent.prototype.login = function () {
        var _this = this;
        this.firebaseService.login(this.user.email, this.user.password)
            .then(function () {
            return _this.router.navigate(["/list"]);
        }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    RecoverPasswordComponent.prototype.signUp = function () {
        var _this = this;
        this.firebaseService.register(this.user)
            .then(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    RecoverPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.firebaseService.resetPassword(this.user.email).then(function () {
            alert("Email Sent");
            _this.router.navigate(["/login"]);
        }, function () { return alert("Invalid Email Address"); });
    };
    RecoverPasswordComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    RecoverPasswordComponent = __decorate([
        core_1.Component({
            selector: "recover-password",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/recover-password/recover-password.html",
            styleUrls: ["./pages/recover-password/recover-password-common.css", "./pages/recover-password/recover-password.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService,
            firebase_service_1.FirebaseService])
    ], RecoverPasswordComponent);
    return RecoverPasswordComponent;
}());
exports.RecoverPasswordComponent = RecoverPasswordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3Zlci1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywrQ0FBOEM7QUFDOUMsK0RBQTZEO0FBQzdELDBDQUF5QztBQUN6QywyRUFBeUU7QUFRekU7SUFJSSxrQ0FBb0IsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGVBQWdDO1FBRmhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKcEQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFLZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ3BDLENBQUM7SUFDRCx5Q0FBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUNELHdDQUFLLEdBQUw7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzFELElBQUksQ0FDRDtZQUNJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUEvQixDQUErQixFQUNuQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUNwRSxDQUFDO0lBQ1YsQ0FBQztJQUNELHlDQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkMsSUFBSSxDQUNEO1lBQ0ksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLEVBQTdELENBQTZELENBQ3RFLENBQUM7SUFDVixDQUFDO0lBQ0QsZ0RBQWEsR0FBYjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ3BEO1lBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNwQyxDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxFQUE5QixDQUE4QixDQUN2QyxDQUFDO0lBQ04sQ0FBQztJQUNELGdEQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBL0NRLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELEVBQUUsK0NBQStDLENBQUM7U0FDdkgsQ0FBQzt5Q0FLOEIsZUFBTTtZQUNELDBCQUFXO1lBQ1Asa0NBQWU7T0FOM0Msd0JBQXdCLENBZ0RwQztJQUFELCtCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicmVjb3Zlci1wYXNzd29yZFwiLFxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9yZWNvdmVyLXBhc3N3b3JkL3JlY292ZXItcGFzc3dvcmQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFJlY292ZXJQYXNzd29yZENvbXBvbmVudCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJuYXRpdmVzY3JpcHRyb2Nrc0B0ZWxlcmlrLmNvbVwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcInBhc3N3b3JkXCI7XG4gICAgfVxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ2luKHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIHNpZ25VcCgpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgcmVzZXRQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UucmVzZXRQYXNzd29yZCh0aGlzLnVzZXIuZW1haWwpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFbWFpbCBTZW50XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiBhbGVydChcIkludmFsaWQgRW1haWwgQWRkcmVzc1wiKVxuICAgICAgICApO1xuICAgIH1cbiAgICB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgfVxufSJdfQ==