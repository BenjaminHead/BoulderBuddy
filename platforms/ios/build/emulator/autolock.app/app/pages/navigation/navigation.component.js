"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
var page_1 = require("tns-core-modules/ui/page");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, firebaseService, page, mapView) {
        var _this = this;
        this.router = router;
        this.firebaseService = firebaseService;
        this.page = page;
        this.mapView = mapView;
        this.screenTouched = false;
        this.onMapReady = function (args) {
            var mapsModule = require("nativescript-google-maps-sdk");
            // var style = require("./map-style.json");
            _this.mapView = args.object;
            _this.mapView.latitude = 8.5125665;
            _this.mapView.longitude = -81.3038948;
            _this.mapView.zoom = 20;
            //change map styling
            // this.mapView.setStyle( style );
            //this.mapView.setStyle( JSON.stringify(style) ); //tried this as well
            //this.mapView.gMap.setStyle( JSON.stringify(style) ); //tried this as well
            // var marker = new mapsModule.Marker();
            // marker.position = mapsModule.Position.positionFromLatLng(28.3818941,-81.5768487);
            // this.mapView.addMarker(marker);
        };
        this.stackLayout = page.getViewById("view");
    }
    NavigationComponent.prototype.onTouch = function () {
        this.screenTouched = true;
        setTimeout(function () { this.screenTouched = false; }, 10000);
    };
    NavigationComponent.prototype.arrived = function () {
        this.router.navigate(["/list"]);
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: "navigation",
            moduleId: module.id,
            templateUrl: "./navigation.html",
            styleUrls: ["./navigation-common.css", "./blank-screen.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            page_1.Page,
            nativescript_google_maps_sdk_1.MapView])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsMkVBQXlFO0FBRXpFLDBFQUEwRTtBQUMxRSxpREFBZ0Q7QUFFaEQsNkVBQXVEO0FBUXZEO0lBS0ksNkJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxJQUFVLEVBQ1YsT0FBZ0I7UUFIcEMsaUJBTUM7UUFObUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQU5wQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVd0QixlQUFVLEdBQUcsVUFBQyxJQUFJO1lBQ2QsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDekQsMkNBQTJDO1lBQzNDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRXZCLG9CQUFvQjtZQUNwQixrQ0FBa0M7WUFDbEMsc0VBQXNFO1lBQ3RFLDJFQUEyRTtZQUUzRSx3Q0FBd0M7WUFDeEMsb0ZBQW9GO1lBQ3BGLGtDQUFrQztRQUN0QyxDQUFDLENBQUM7UUFuQkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFvQkQscUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxjQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxxQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUF0Q1EsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxvQkFBb0IsQ0FBQztTQUMvRCxDQUFDO3lDQU04QixlQUFNO1lBQ0csa0NBQWU7WUFDMUIsV0FBSTtZQUNELHNDQUFPO09BUjNCLG1CQUFtQixDQXVDL0I7SUFBRCwwQkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBNYXBWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibmF2aWdhdGlvblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9uYXZpZ2F0aW9uLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbmF2aWdhdGlvbi1jb21tb24uY3NzXCIsIFwiLi9ibGFuay1zY3JlZW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQge1xuXG4gICAgc2NyZWVuVG91Y2hlZCA9IGZhbHNlO1xuICAgIHN0YWNrTGF5b3V0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG1hcFZpZXc6IE1hcFZpZXdcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdGFja0xheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ2aWV3XCIpO1xuICAgIH1cblxuICAgIG9uTWFwUmVhZHkgPSAoYXJncykgPT4ge1xuICAgICAgICB2YXIgbWFwc01vZHVsZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpO1xuICAgICAgICAvLyB2YXIgc3R5bGUgPSByZXF1aXJlKFwiLi9tYXAtc3R5bGUuanNvblwiKTtcbiAgICAgICAgdGhpcy5tYXBWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMubWFwVmlldy5sYXRpdHVkZSA9IDguNTEyNTY2NTtcbiAgICAgICAgdGhpcy5tYXBWaWV3LmxvbmdpdHVkZSA9IC04MS4zMDM4OTQ4O1xuICAgICAgICB0aGlzLm1hcFZpZXcuem9vbSA9IDIwO1xuXG4gICAgICAgIC8vY2hhbmdlIG1hcCBzdHlsaW5nXG4gICAgICAgIC8vIHRoaXMubWFwVmlldy5zZXRTdHlsZSggc3R5bGUgKTtcbiAgICAgICAgLy90aGlzLm1hcFZpZXcuc2V0U3R5bGUoIEpTT04uc3RyaW5naWZ5KHN0eWxlKSApOyAvL3RyaWVkIHRoaXMgYXMgd2VsbFxuICAgICAgICAvL3RoaXMubWFwVmlldy5nTWFwLnNldFN0eWxlKCBKU09OLnN0cmluZ2lmeShzdHlsZSkgKTsgLy90cmllZCB0aGlzIGFzIHdlbGxcblxuICAgICAgICAvLyB2YXIgbWFya2VyID0gbmV3IG1hcHNNb2R1bGUuTWFya2VyKCk7XG4gICAgICAgIC8vIG1hcmtlci5wb3NpdGlvbiA9IG1hcHNNb2R1bGUuUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDI4LjM4MTg5NDEsLTgxLjU3Njg0ODcpO1xuICAgICAgICAvLyB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgfTtcblxuICAgIG9uVG91Y2goKXtcbiAgICAgICAgdGhpcy5zY3JlZW5Ub3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGlzLnNjcmVlblRvdWNoZWQgPSBmYWxzZTt9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgYXJyaXZlZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xuICAgIH1cbn0iXX0=