"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
var IntroComponent = /** @class */ (function () {
    function IntroComponent(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
    }
    IntroComponent.prototype.start = function () {
        this.router.navigate(["/tour"]);
    };
    IntroComponent = __decorate([
        core_1.Component({
            selector: "intro",
            moduleId: module.id,
            templateUrl: "./intro.html",
            styleUrls: ["./intro-common.css", "./intro.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService])
    ], IntroComponent);
    return IntroComponent;
}());
exports.IntroComponent = IntroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QywyRUFBeUU7QUFRekU7SUFDSSx3QkFBb0IsTUFBYyxFQUNkLGVBQWdDO1FBRGhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDcEQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQVBRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsY0FBYztZQUMzQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLENBQUM7U0FDbkQsQ0FBQzt5Q0FFOEIsZUFBTTtZQUNHLGtDQUFlO09BRjNDLGNBQWMsQ0FRMUI7SUFBRCxxQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJpbnRyb1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pbnRyby5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2ludHJvLWNvbW1vbi5jc3NcIiwgXCIuL2ludHJvLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJbnRyb0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90b3VyXCJdKTtcbiAgICB9XG59Il19