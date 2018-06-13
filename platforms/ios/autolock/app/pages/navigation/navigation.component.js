"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
var page_1 = require("tns-core-modules/ui/page");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var element_registry_1 = require("nativescript-angular/element-registry");
// registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, firebaseService, page) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.page = page;
        // @ViewChild("MapView") mapView: ElementRef;
        this.screenTouched = false;
        this.latitude = -33.86;
        this.longitude = 151.20;
        this.zoom = 8;
        this.minZoom = 0;
        this.maxZoom = 22;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
        this.stackLayout = page.getViewById("view");
    }
    // onMapReady = (event) => {
    //     // var mapsModule = require("nativescript-google-maps-sdk");
    //     // var style = require("./map-style.json");
    //     // this.mapView = args.object;
    //     // this.mapView.latitude = 8.5125665;
    //     // this.mapView.longitude = -81.3038948;
    //     // this.mapView.zoom = 20;
    //
    //     //change map styling
    //     // this.mapView.setStyle( style );
    //     //this.mapView.setStyle( JSON.stringify(style) ); //tried this as well
    //     //this.mapView.gMap.setStyle( JSON.stringify(style) ); //tried this as well
    //
    //     // var marker = new mapsModule.Marker();
    //     // marker.position = mapsModule.Position.positionFromLatLng(28.3818941,-81.5768487);
    //     // this.mapView.addMarker(marker);
    // };
    NavigationComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        console.log("Setting a marker...");
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
    };
    NavigationComponent.prototype.onCoordinateTapped = function (args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    NavigationComponent.prototype.onMarkerEvent = function (args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    NavigationComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
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
            styleUrls: ["./navigation-common.css", "./navigation.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            page_1.Page])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFDekMsMkVBQXlFO0FBRXpFLDBFQUEwRTtBQUMxRSxpREFBZ0Q7QUFFaEQsNkVBQXlFO0FBQ3pFLDBFQUFzRTtBQUV0RSxxRkFBcUY7QUFDckYsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLHNDQUFPLEVBQVAsQ0FBTyxDQUFDLENBQUM7QUFRMUM7SUFtQkksNkJBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxJQUFVO1FBRlYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBbkI5Qiw2Q0FBNkM7UUFFN0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsYUFBUSxHQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQVN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDRCQUE0QjtJQUM1QixtRUFBbUU7SUFDbkUsa0RBQWtEO0lBQ2xELHFDQUFxQztJQUNyQyw0Q0FBNEM7SUFDNUMsK0NBQStDO0lBQy9DLGlDQUFpQztJQUNqQyxFQUFFO0lBQ0YsMkJBQTJCO0lBQzNCLHlDQUF5QztJQUN6Qyw2RUFBNkU7SUFDN0Usa0ZBQWtGO0lBQ2xGLEVBQUU7SUFDRiwrQ0FBK0M7SUFDL0MsMkZBQTJGO0lBQzNGLHlDQUF5QztJQUN6QyxLQUFLO0lBRUwsd0NBQVUsR0FBVixVQUFXLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGdEQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVM7Y0FDeEMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2NBQ3RDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsNkNBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixVQUFVLENBQUMsY0FBWSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBakZRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLEVBQUUsa0JBQWtCLENBQUM7U0FDN0QsQ0FBQzt5Q0FvQjhCLGVBQU07WUFDRyxrQ0FBZTtZQUMxQixXQUFJO09BckJyQixtQkFBbUIsQ0FrRi9CO0lBQUQsMEJBQUM7Q0FBQSxBQWxGRCxJQWtGQztBQWxGWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcblxuLy8gcmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKS5NYXBWaWV3KTtcbnJlZ2lzdGVyRWxlbWVudCgnTWFwVmlldycsICgpID0+IE1hcFZpZXcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJuYXZpZ2F0aW9uXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL25hdmlnYXRpb24uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9uYXZpZ2F0aW9uLWNvbW1vbi5jc3NcIiwgXCIuL25hdmlnYXRpb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQge1xuXG4gICAgLy8gQFZpZXdDaGlsZChcIk1hcFZpZXdcIikgbWFwVmlldzogRWxlbWVudFJlZjtcblxuICAgIHNjcmVlblRvdWNoZWQgPSBmYWxzZTtcbiAgICBzdGFja0xheW91dDtcblxuICAgIGxhdGl0dWRlID0gIC0zMy44NjtcbiAgICBsb25naXR1ZGUgPSAxNTEuMjA7XG4gICAgem9vbSA9IDg7XG4gICAgbWluWm9vbSA9IDA7XG4gICAgbWF4Wm9vbSA9IDIyO1xuICAgIGJlYXJpbmcgPSAwO1xuICAgIHRpbHQgPSAwO1xuICAgIHBhZGRpbmcgPSBbNDAsIDQwLCA0MCwgNDBdO1xuICAgIG1hcFZpZXc6IE1hcFZpZXc7XG5cbiAgICBsYXN0Q2FtZXJhOiBTdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3RhY2tMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwidmlld1wiKTtcbiAgICB9XG5cbiAgICAvLyBvbk1hcFJlYWR5ID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgIC8vIHZhciBtYXBzTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIik7XG4gICAgLy8gICAgIC8vIHZhciBzdHlsZSA9IHJlcXVpcmUoXCIuL21hcC1zdHlsZS5qc29uXCIpO1xuICAgIC8vICAgICAvLyB0aGlzLm1hcFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAvLyAgICAgLy8gdGhpcy5tYXBWaWV3LmxhdGl0dWRlID0gOC41MTI1NjY1O1xuICAgIC8vICAgICAvLyB0aGlzLm1hcFZpZXcubG9uZ2l0dWRlID0gLTgxLjMwMzg5NDg7XG4gICAgLy8gICAgIC8vIHRoaXMubWFwVmlldy56b29tID0gMjA7XG4gICAgLy9cbiAgICAvLyAgICAgLy9jaGFuZ2UgbWFwIHN0eWxpbmdcbiAgICAvLyAgICAgLy8gdGhpcy5tYXBWaWV3LnNldFN0eWxlKCBzdHlsZSApO1xuICAgIC8vICAgICAvL3RoaXMubWFwVmlldy5zZXRTdHlsZSggSlNPTi5zdHJpbmdpZnkoc3R5bGUpICk7IC8vdHJpZWQgdGhpcyBhcyB3ZWxsXG4gICAgLy8gICAgIC8vdGhpcy5tYXBWaWV3LmdNYXAuc2V0U3R5bGUoIEpTT04uc3RyaW5naWZ5KHN0eWxlKSApOyAvL3RyaWVkIHRoaXMgYXMgd2VsbFxuICAgIC8vXG4gICAgLy8gICAgIC8vIHZhciBtYXJrZXIgPSBuZXcgbWFwc01vZHVsZS5NYXJrZXIoKTtcbiAgICAvLyAgICAgLy8gbWFya2VyLnBvc2l0aW9uID0gbWFwc01vZHVsZS5Qb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoMjguMzgxODk0MSwtODEuNTc2ODQ4Nyk7XG4gICAgLy8gICAgIC8vIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAvLyB9O1xuXG4gICAgb25NYXBSZWFkeShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTWFwIFJlYWR5Jyk7XG5cbiAgICAgICAgdGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBhIG1hcmtlci4uLlwiKTtcblxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcigpO1xuICAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoLTMzLjg2LCAxNTEuMjApO1xuICAgICAgICBtYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xuICAgICAgICBtYXJrZXIuc25pcHBldCA9IFwiQXVzdHJhbGlhXCI7XG4gICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgICB9XG5cbiAgICBvbkNvb3JkaW5hdGVUYXBwZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGUgVGFwcGVkLCBMYXQ6IFwiICsgYXJncy5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uTWFya2VyRXZlbnQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgICAgICsgXCInIHRyaWdnZXJlZCBvbjogXCIgKyBhcmdzLm1hcmtlci50aXRsZVxuICAgICAgICAgICAgKyBcIiwgTGF0OiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XG4gICAgICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcbiAgICB9XG5cbiAgICBvblRvdWNoKCl7XG4gICAgICAgIHRoaXMuc2NyZWVuVG91Y2hlZCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhpcy5zY3JlZW5Ub3VjaGVkID0gZmFsc2U7fSwgMTAwMDApO1xuICAgIH1cblxuICAgIGFycml2ZWQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICB9XG59Il19