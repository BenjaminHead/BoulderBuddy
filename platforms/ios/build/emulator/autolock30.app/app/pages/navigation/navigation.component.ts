import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";
import { isAndroid, isIOS } from "tns-core-modules/platform";
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Page } from "tns-core-modules/ui/page";
import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import {registerElement} from "nativescript-angular/element-registry";

// registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
registerElement('MapView', () => MapView);

@Component({
    selector: "navigation",
    moduleId: module.id,
    templateUrl: "./navigation.html",
    styleUrls: ["./navigation-common.css", "./navigation.css"]
})
export class NavigationComponent {

    // @ViewChild("MapView") mapView: ElementRef;

    screenTouched = false;
    stackLayout;

    latitude =  -33.86;
    longitude = 151.20;
    zoom = 8;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: String;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private page: Page
    ) {
        this.stackLayout = page.getViewById("view");
    }

    onMapReady(event) {
        console.log('Map Ready');

        this.mapView = event.object;

        console.log("Setting a marker...");

        var marker = new Marker();
        marker.position = Position.positionFromLatLng(40.4857792, -111.9423779);
        marker.title = "Microexcel";
        marker.snippet = "Orem";
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }

    onCoordinateTapped(args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }
}