"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
var page_1 = require("tns-core-modules/ui/page");
var nativescript_directions_1 = require("nativescript-directions");
var BlankScreenComponent = /** @class */ (function () {
    function BlankScreenComponent(router, firebaseService, page) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.page = page;
        this.screenTouched = false;
        this.directions = new nativescript_directions_1.Directions;
        this.stackLayout = page.getViewById("view");
        this.directions.available().then(function (avail) {
            console.log(avail ? "Yes" : "No");
        });
    }
    BlankScreenComponent.prototype.onTouch = function () {
        this.screenTouched = true;
        setTimeout(function () { this.screenTouched = false; }, 10000);
    };
    BlankScreenComponent.prototype.getDirections = function () {
        this.directions.navigate({
            from: {
                lat: 40.4857792,
                lng: -111.9423779
            },
            to: [{
                    address: "Taqueria 27, 4670 Holladay Blvd E, Holladay, UT 84117",
                }],
            ios: {
                preferGoogleMaps: true,
                allowGoogleMapsWeb: true // If waypoints are passed in and Google Maps is not installed, you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored), or you can open Google Maps on web so all waypoints are shown (set this property to true). Default false.
            }
        }).then(function () {
            console.log("Maps app launched.");
        }, function (error) {
            console.log(error);
        });
    };
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        this.router.navigate(["/list"]);
    };
    BlankScreenComponent = __decorate([
        core_1.Component({
            selector: "blank-screen",
            moduleId: module.id,
            templateUrl: "./blank-screen.html",
            styleUrls: ["./blank-screen-common.css", "./blank-screen.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            page_1.Page])
    ], BlankScreenComponent);
    return BlankScreenComponent;
}());
exports.BlankScreenComponent = BlankScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQVFyRDtJQU1JLDhCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsSUFBVTtRQUZWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU45QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQUcsSUFBSSxvQ0FBVSxDQUFDO1FBT3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxjQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBSSxFQUFFO2dCQUNGLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEdBQUcsRUFBRSxDQUFDLFdBQVc7YUFDcEI7WUFDRCxFQUFFLEVBQUUsQ0FBQztvQkFDRCxPQUFPLEVBQUUsdURBQXVEO2lCQUNuRSxDQUFDO1lBQ0YsR0FBRyxFQUFFO2dCQUNELGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxnUkFBZ1I7YUFDNVM7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQWhEUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLG9CQUFvQixDQUFDO1NBQ2pFLENBQUM7eUNBTzhCLGVBQU07WUFDRyxrQ0FBZTtZQUMxQixXQUFJO09BUnJCLG9CQUFvQixDQWlEaEM7SUFBRCwyQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBEaXJlY3Rpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImJsYW5rLXNjcmVlblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ibGFuay1zY3JlZW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ibGFuay1zY3JlZW4tY29tbW9uLmNzc1wiLCBcIi4vYmxhbmstc2NyZWVuLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBCbGFua1NjcmVlbkNvbXBvbmVudCB7XG5cbiAgICBzY3JlZW5Ub3VjaGVkID0gZmFsc2U7XG4gICAgc3RhY2tMYXlvdXQ7XG4gICAgZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICAvLyBwcml2YXRlIHN0YWNrTGF5b3V0OiBTdGFja0xheW91dFxuICAgICkge1xuICAgICAgICB0aGlzLnN0YWNrTGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInZpZXdcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGF2YWlsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVG91Y2goKXtcbiAgICAgICAgdGhpcy5zY3JlZW5Ub3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGlzLnNjcmVlblRvdWNoZWQgPSBmYWxzZTt9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGZyb206IHsgLy8gb3B0aW9uYWwsIGRlZmF1bHQgJ2N1cnJlbnQgbG9jYXRpb24nXG4gICAgICAgICAgICAgICAgbGF0OiA0MC40ODU3NzkyLFxuICAgICAgICAgICAgICAgIGxuZzogLTExMS45NDIzNzc5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG86IFt7IC8vIGlmIGFuIEFycmF5IGlzIHBhc3NlZCAoYXMgaW4gdGhpcyBleGFtcGxlKSwgdGhlIGxhc3QgaXRlbSBpcyB0aGUgZGVzdGluYXRpb24sIHRoZSBhZGRyZXNzZXMgaW4gYmV0d2VlbiBhcmUgJ3dheXBvaW50cycuXG4gICAgICAgICAgICAgICAgYWRkcmVzczogXCJUYXF1ZXJpYSAyNywgNDY3MCBIb2xsYWRheSBCbHZkIEUsIEhvbGxhZGF5LCBVVCA4NDExN1wiLFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBpb3M6IHtcbiAgICAgICAgICAgICAgICBwcmVmZXJHb29nbGVNYXBzOiB0cnVlLCAvLyBJZiB0aGUgR29vZ2xlIE1hcHMgYXBwIGlzIGluc3RhbGxlZCwgdXNlIHRoYXQgb25lIGluc3RlYWQgb2YgQXBwbGUgTWFwcywgYmVjYXVzZSBpdCBzdXBwb3J0cyB3YXlwb2ludHMuIERlZmF1bHQgdHJ1ZS5cbiAgICAgICAgICAgICAgICBhbGxvd0dvb2dsZU1hcHNXZWI6IHRydWUgLy8gSWYgd2F5cG9pbnRzIGFyZSBwYXNzZWQgaW4gYW5kIEdvb2dsZSBNYXBzIGlzIG5vdCBpbnN0YWxsZWQsIHlvdSBjYW4gZWl0aGVyIG9wZW4gQXBwbGUgTWFwcyBhbmQgdGhlIGZpcnN0IHdheXBvaW50IGlzIHVzZWQgYXMgdGhlIHRvLWFkZHJlc3MgKHRoZSByZXN0IGlzIGlnbm9yZWQpLCBvciB5b3UgY2FuIG9wZW4gR29vZ2xlIE1hcHMgb24gd2ViIHNvIGFsbCB3YXlwb2ludHMgYXJlIHNob3duIChzZXQgdGhpcyBwcm9wZXJ0eSB0byB0cnVlKS4gRGVmYXVsdCBmYWxzZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25hdmlnYXRpb25cIl0pO1xuICAgIH1cblxuICAgIGFycml2ZWQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICB9XG59Il19