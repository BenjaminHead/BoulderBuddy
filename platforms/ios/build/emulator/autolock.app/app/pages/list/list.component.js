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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpR0FBNkU7QUFDN0UsMENBQXlEO0FBQ3pELDJFQUF5RTtBQVN6RTtJQUtJLHVCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsS0FBcUI7UUFGckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFBO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsOERBQXFCLENBQUMsU0FBUyxDQUFDO1lBQzVCLEdBQUcsRUFBRSx5Q0FBeUM7WUFDOUMsZ0JBQWdCLEVBQUUsR0FBRztZQUNyQixlQUFlLEVBQUUsQ0FBQztZQUNsQixjQUFjLEVBQUUsQ0FBQztZQUNqQixjQUFjLEVBQUUsSUFBSTtZQUNwQixpQkFBaUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5Qiw4REFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBRTtnQkFDM0MsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQ3BCO1NBQ0EsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSw4REFBcUIsQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsOERBQXFCLENBQUMsaUJBQWlCLEVBQUUsUUFBUTtnQkFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzVDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDSiw4REFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBUyxHQUFHO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSw4REFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBeERRLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztTQUNqRCxDQUFDO3lDQU04QixlQUFNO1lBQ0csa0NBQWU7WUFDekIsdUJBQWM7T0FQaEMsYUFBYSxDQTBEekI7SUFBRCxvQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kR2VvbG9jYXRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1nZW9sb2NhdGlvbi1sdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xpc3QtY29tbW9uLmNzc1wiLCBcIi4vbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0cmlwSW5mbztcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy50cmlwSW5mbyA9IHtcbiAgICAgICAgICAgIG9kb21ldGVyOiA1LFxuICAgICAgICAgICAgdHJpcFRpbWU6IDEwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHBhcmFtc1sndXNlciddO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGlzLi4uXCIsIHRoaXMudXNlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZighdGhpcy51c2VyKXtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0VHJhY2tpbmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRnVuY3Rpb24gZW50ZXJlZC4uLlwiKTtcbiAgICAgICAgQmFja2dyb3VuZEdlb2xvY2F0aW9uLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2Ftb3JhLTJjYzRjLmZpcmViYXNlaW8uY29tL3RyaXAnLFxuICAgICAgICAgICAgaHR0cFJvb3RQcm9wZXJ0eTogJy4nLFxuICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiAwLFxuICAgICAgICAgICAgZGlzdGFuY2VGaWx0ZXI6IDUsXG4gICAgICAgICAgICBwcmV2ZW50U3VzcGVuZDogdHJ1ZSxcbiAgICAgICAgICAgIGhlYXJ0YmVhdEludGVydmFsOiA2MFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJCZWdpbiB0cmFja2luZ1wiKTtcbiAgICAgICAgQmFja2dyb3VuZEdlb2xvY2F0aW9uLnN0YXJ0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm93IG5hdmlnYXRlIHRvXCIpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYmxhbmtcIl0sIHtxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgJ3VzZXInOiB0aGlzLnVzZXJcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dUcmlwKCkge1xuICAgICAgICBCYWNrZ3JvdW5kR2VvbG9jYXRpb24uc2V0Q29uZmlnKHtsb2dMZXZlbDogQmFja2dyb3VuZEdlb2xvY2F0aW9uLkxPR19MRVZFTF9WRVJCT1NFLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZCBsb2dMZXZlbCBzdWNjZXNzXCIpO1xuICAgICAgICB9fSk7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5nZXRMb2coZnVuY3Rpb24obG9nKXtcbiAgICAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmRUcmlwSW5mbyh0aGlzLnRyaXBJbmZvKTtcbiAgICB9XG5cbiAgICBzdG9wVHJhY2tpbmcoKSB7XG4gICAgICAgIEJhY2tncm91bmRHZW9sb2NhdGlvbi5zdG9wKCk7XG4gICAgfVxuXG59Il19