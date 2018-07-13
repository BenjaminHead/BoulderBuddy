"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_background_geolocation_lt_1 = require("nativescript-background-geolocation-lt");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(router, firebaseService, route) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.user = this.firebaseService.getUser();
        this.tripInfo = {
            odometer: 5,
            tripTime: 10
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        //
    };
    ListComponent.prototype.startTracking = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.configure({
            url: 'https://amora-2cc4c.firebaseio.com/trips',
            httpRootProperty: '.',
            desiredAccuracy: 0,
            distanceFilter: 5,
            preventSuspend: true,
            heartbeatInterval: 60
        });
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.start();
        this.router.navigate(["/blank"]);
    };
    ListComponent.prototype.logTrip = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.setConfig({ logLevel: nativescript_background_geolocation_lt_1.BackgroundGeolocation.LOG_LEVEL_VERBOSE, function: function () {
                console.log("Changed logLevel success");
            } });
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.getLog(function (log) {
            console.log(log);
        });
        this.firebaseService.sendTripInfo(this.tripInfo);
    };
    ListComponent.prototype.stopTracking = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.stop();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            providers: [firebase_service_1.FirebaseService],
            templateUrl: "./pages/list/list.html",
            styleUrls: ["./pages/list/list-common.css", "./pages/list/list.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpR0FBNkU7QUFDN0UsMENBQXlEO0FBQ3pELDJFQUF5RTtBQVF6RTtJQUtJLHVCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsS0FBcUI7UUFGckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFBO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxFQUFFO0lBQ04sQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDSSw4REFBcUIsQ0FBQyxTQUFTLENBQUM7WUFDNUIsR0FBRyxFQUFFLDBDQUEwQztZQUMvQyxnQkFBZ0IsRUFBRSxHQUFHO1lBQ3JCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGlCQUFpQixFQUFFLEVBQUU7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsOERBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0ksOERBQXFCLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLDhEQUFxQixDQUFDLGlCQUFpQixFQUFFLFFBQVE7Z0JBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUM1QyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ0osOERBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVMsR0FBRztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksOERBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQTVDUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzVCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDdkUsQ0FBQzt5Q0FNOEIsZUFBTTtZQUNHLGtDQUFlO1lBQ3pCLHVCQUFjO09BUGhDLGFBQWEsQ0E4Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmFja2dyb3VuZEdlb2xvY2F0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhY2tncm91bmQtZ2VvbG9jYXRpb24tbHRcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICAgIHByb3ZpZGVyczogW0ZpcmViYXNlU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvbGlzdC9saXN0LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHRyaXBJbmZvO1xuICAgIHVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB0aGlzLnRyaXBJbmZvID0ge1xuICAgICAgICAgICAgb2RvbWV0ZXI6IDUsXG4gICAgICAgICAgICB0cmlwVGltZTogMTBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIHN0YXJ0VHJhY2tpbmcoKSB7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5jb25maWd1cmUoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hbW9yYS0yY2M0Yy5maXJlYmFzZWlvLmNvbS90cmlwcycsXG4gICAgICAgICAgICBodHRwUm9vdFByb3BlcnR5OiAnLicsXG4gICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IDAsXG4gICAgICAgICAgICBkaXN0YW5jZUZpbHRlcjogNSxcbiAgICAgICAgICAgIHByZXZlbnRTdXNwZW5kOiB0cnVlLFxuICAgICAgICAgICAgaGVhcnRiZWF0SW50ZXJ2YWw6IDYwXG4gICAgICAgIH0pO1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uc3RhcnQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JsYW5rXCJdKTtcbiAgICB9XG5cbiAgICBsb2dUcmlwKCkge1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uc2V0Q29uZmlnKHtsb2dMZXZlbDogQmFja2dyb3VuZEdlb2xvY2F0aW9uLkxPR19MRVZFTF9WRVJCT1NFLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZCBsb2dMZXZlbCBzdWNjZXNzXCIpO1xuICAgICAgICB9fSk7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5nZXRMb2coZnVuY3Rpb24obG9nKXtcbiAgICAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmRUcmlwSW5mbyh0aGlzLnRyaXBJbmZvKTtcbiAgICB9XG5cbiAgICBzdG9wVHJhY2tpbmcoKSB7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5zdG9wKCk7XG4gICAgfVxuXG59Il19