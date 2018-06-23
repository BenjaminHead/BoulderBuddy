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
        this.firebaseService.sendTripInfo(this.user, this.tripInfo);
    };
    ListComponent.prototype.stopTracking = function () {
        nativescript_background_geolocation_lt_1.BackgroundGeolocation.stop();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            providers: [firebase_service_1.FirebaseService],
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpR0FBNkU7QUFDN0UsMENBQXlEO0FBQ3pELDJFQUF5RTtBQVN6RTtJQUtJLHVCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsS0FBcUI7UUFGckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFBO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsOERBQXFCLENBQUMsU0FBUyxDQUFDO1lBQzVCLEdBQUcsRUFBRSx5Q0FBeUM7WUFDOUMsZ0JBQWdCLEVBQUUsR0FBRztZQUNyQixlQUFlLEVBQUUsQ0FBQztZQUNsQixjQUFjLEVBQUUsQ0FBQztZQUNqQixjQUFjLEVBQUUsSUFBSTtZQUNwQixpQkFBaUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5Qiw4REFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBRTtnQkFDM0MsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQ3BCO1NBQ0EsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSw4REFBcUIsQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsOERBQXFCLENBQUMsaUJBQWlCLEVBQUUsUUFBUTtnQkFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzVDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDSiw4REFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBUyxHQUFHO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLDhEQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUF4RFEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO1NBQ2pELENBQUM7eUNBTThCLGVBQU07WUFDRyxrQ0FBZTtZQUN6Qix1QkFBYztPQVBoQyxhQUFhLENBMER6QjtJQUFELG9CQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JhY2tncm91bmRHZW9sb2NhdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWdlb2xvY2F0aW9uLWx0XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgICBwcm92aWRlcnM6IFtGaXJlYmFzZVNlcnZpY2VdLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbGlzdC1jb21tb24uY3NzXCIsIFwiLi9saXN0LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHRyaXBJbmZvO1xuICAgIHVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB0aGlzLnRyaXBJbmZvID0ge1xuICAgICAgICAgICAgb2RvbWV0ZXI6IDUsXG4gICAgICAgICAgICB0cmlwVGltZTogMTBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gcGFyYW1zWyd1c2VyJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaXMuLi5cIiwgdGhpcy51c2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKCF0aGlzLnVzZXIpe1xuICAgICAgICAgICAgdGhpcy51c2VyID0gdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRUcmFja2luZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGdW5jdGlvbiBlbnRlcmVkLi4uXCIpO1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uY29uZmlndXJlKHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYW1vcmEtMmNjNGMuZmlyZWJhc2Vpby5jb20vdHJpcCcsXG4gICAgICAgICAgICBodHRwUm9vdFByb3BlcnR5OiAnLicsXG4gICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IDAsXG4gICAgICAgICAgICBkaXN0YW5jZUZpbHRlcjogNSxcbiAgICAgICAgICAgIHByZXZlbnRTdXNwZW5kOiB0cnVlLFxuICAgICAgICAgICAgaGVhcnRiZWF0SW50ZXJ2YWw6IDYwXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJlZ2luIHRyYWNraW5nXCIpO1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uc3RhcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3cgbmF2aWdhdGUgdG9cIik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ibGFua1wiXSwge3F1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAndXNlcic6IHRoaXMudXNlclxuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ1RyaXAoKSB7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5zZXRDb25maWcoe2xvZ0xldmVsOiBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uTE9HX0xFVkVMX1ZFUkJPU0UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkIGxvZ0xldmVsIHN1Y2Nlc3NcIik7XG4gICAgICAgIH19KTtcbiAgICAgICAgQmFja2dyb3VuZEdlb2xvY2F0aW9uLmdldExvZyhmdW5jdGlvbihsb2cpe1xuICAgICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2VuZFRyaXBJbmZvKHRoaXMudXNlciwgdGhpcy50cmlwSW5mbyk7XG4gICAgfVxuXG4gICAgc3RvcFRyYWNraW5nKCkge1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uc3RvcCgpO1xuICAgIH1cblxufSJdfQ==