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
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.user = params['user'];
            console.log("User is...", _this.user);
        });
        if (!this.user) {
            this.user = this.firebaseService.getUser();
        }
    };
    ListComponent.prototype.startTracking = function () {
        console.log("Function entered...");
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.configure({
            url: 'https://amora-2cc4c.firebaseio.com/trip',
            httpRootProperty: '.',
            desiredAccuracy: 0,
            distanceFilter: 5,
            preventSuspend: true,
            heartbeatInterval: 60
        });
        console.log("Begin tracking");
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.start();
        console.log("Now navigate to");
        this.router.navigate(["/blank"], { queryParams: {
                'user': this.user
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpR0FBNkU7QUFDN0UsMENBQXlEO0FBQ3pELDJFQUF5RTtBQVF6RTtJQUtJLHVCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsS0FBcUI7UUFGckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFBO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsOERBQXFCLENBQUMsU0FBUyxDQUFDO1lBQzVCLEdBQUcsRUFBRSx5Q0FBeUM7WUFDOUMsZ0JBQWdCLEVBQUUsR0FBRztZQUNyQixlQUFlLEVBQUUsQ0FBQztZQUNsQixjQUFjLEVBQUUsQ0FBQztZQUNqQixjQUFjLEVBQUUsSUFBSTtZQUNwQixpQkFBaUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5Qiw4REFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBRTtnQkFDM0MsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQ3BCO1NBQ0EsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSw4REFBcUIsQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsOERBQXFCLENBQUMsaUJBQWlCLEVBQUUsUUFBUTtnQkFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzVDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDSiw4REFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBUyxHQUFHO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSw4REFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBeERRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDNUIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUN2RSxDQUFDO3lDQU04QixlQUFNO1lBQ0csa0NBQWU7WUFDekIsdUJBQWM7T0FQaEMsYUFBYSxDQTBEekI7SUFBRCxvQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9saXN0L2xpc3QuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdHJpcEluZm87XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIHRoaXMudHJpcEluZm8gPSB7XG4gICAgICAgICAgICBvZG9tZXRlcjogNSxcbiAgICAgICAgICAgIHRyaXBUaW1lOiAxMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSBwYXJhbXNbJ3VzZXInXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBpcy4uLlwiLCB0aGlzLnVzZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoIXRoaXMudXNlcil7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydFRyYWNraW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uIGVudGVyZWQuLi5cIik7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5jb25maWd1cmUoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hbW9yYS0yY2M0Yy5maXJlYmFzZWlvLmNvbS90cmlwJyxcbiAgICAgICAgICAgIGh0dHBSb290UHJvcGVydHk6ICcuJyxcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMCxcbiAgICAgICAgICAgIGRpc3RhbmNlRmlsdGVyOiA1LFxuICAgICAgICAgICAgcHJldmVudFN1c3BlbmQ6IHRydWUsXG4gICAgICAgICAgICBoZWFydGJlYXRJbnRlcnZhbDogNjBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmVnaW4gdHJhY2tpbmdcIik7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdyBuYXZpZ2F0ZSB0b1wiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JsYW5rXCJdLCB7cXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICd1c2VyJzogdGhpcy51c2VyXG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9nVHJpcCgpIHtcbiAgICAgICAgQmFja2dyb3VuZEdlb2xvY2F0aW9uLnNldENvbmZpZyh7bG9nTGV2ZWw6IEJhY2tncm91bmRHZW9sb2NhdGlvbi5MT0dfTEVWRUxfVkVSQk9TRSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZWQgbG9nTGV2ZWwgc3VjY2Vzc1wiKTtcbiAgICAgICAgfX0pO1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uZ2V0TG9nKGZ1bmN0aW9uKGxvZyl7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5zZW5kVHJpcEluZm8odGhpcy50cmlwSW5mbyk7XG4gICAgfVxuXG4gICAgc3RvcFRyYWNraW5nKCkge1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uc3RvcCgpO1xuICAgIH1cblxufSJdfQ==