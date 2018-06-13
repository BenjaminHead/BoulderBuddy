import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";
import { isAndroid, isIOS } from "tns-core-modules/platform";
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Page } from "tns-core-modules/ui/page";
import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures";
import { MapView } from "nativescript-google-maps-sdk";

@Component({
    selector: "navigation",
    moduleId: module.id,
    templateUrl: "./navigation.html",
    styleUrls: ["./navigation-common.css", "./blank-screen.css"]
})
export class NavigationComponent {

    screenTouched = false;
    stackLayout;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private page: Page,
                private mapView: MapView
    ) {
        this.stackLayout = page.getViewById("view");
    }

    onMapReady = (args) => {
        var mapsModule = require("nativescript-google-maps-sdk");
        // var style = require("./map-style.json");
        this.mapView = args.object;
        this.mapView.latitude = 8.5125665;
        this.mapView.longitude = -81.3038948;
        this.mapView.zoom = 20;

        //change map styling
        // this.mapView.setStyle( style );
        //this.mapView.setStyle( JSON.stringify(style) ); //tried this as well
        //this.mapView.gMap.setStyle( JSON.stringify(style) ); //tried this as well

        // var marker = new mapsModule.Marker();
        // marker.position = mapsModule.Position.positionFromLatLng(28.3818941,-81.5768487);
        // this.mapView.addMarker(marker);
    };

    onTouch(){
        this.screenTouched = true;
        setTimeout(function() {this.screenTouched = false;}, 10000);
    }

    arrived() {
        this.router.navigate(["/list"]);
    }
}