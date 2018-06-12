"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_background_geolocation_lt_1 = require("nativescript-background-geolocation-lt");
nativescript_background_geolocation_lt_1.BackgroundGeolocation.configure({
    desiredAccuracy: 0,
    distanceFilter: 5,
    preventSuspend: true,
    heartbeatInterval: 60
});
var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.startTracking = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.start();
    };
    ListComponent.prototype.stopTracking = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.stop();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpR0FBNkU7QUFFN0UsOERBQXFCLENBQUMsU0FBUyxDQUFDO0lBQzVCLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGlCQUFpQixFQUFFLEVBQUU7Q0FDeEIsQ0FBQyxDQUFDO0FBUUg7SUFDSTtJQUFlLENBQUM7SUFFaEIscUNBQWEsR0FBYjtRQUNJLDhEQUFxQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksOERBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQVRRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7U0FDakQsQ0FBQzs7T0FDVyxhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhY2tncm91bmRHZW9sb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWdlb2xvY2F0aW9uLWx0XCI7XG5cbkJhY2tncm91bmRHZW9sb2NhdGlvbi5jb25maWd1cmUoe1xuICAgIGRlc2lyZWRBY2N1cmFjeTogMCxcbiAgICBkaXN0YW5jZUZpbHRlcjogNSxcbiAgICBwcmV2ZW50U3VzcGVuZDogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBoZWFydGJlYXRJbnRlcnZhbDogNjBcbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHN0YXJ0VHJhY2tpbmcoKSB7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0b3BUcmFja2luZygpIHtcbiAgICAgICAgQmFja2dyb3VuZEdlb2xvY2F0aW9uLnN0b3AoKTtcbiAgICB9XG5cbn0iXX0=