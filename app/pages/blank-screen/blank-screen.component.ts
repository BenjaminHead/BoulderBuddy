import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";
import { isAndroid, isIOS } from "tns-core-modules/platform";
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Page } from "tns-core-modules/ui/page";
import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures";
import { Directions } from "nativescript-directions";

@Component({
    selector: "blank-screen",
    moduleId: module.id,
    templateUrl: "./blank-screen.html",
    styleUrls: ["./blank-screen-common.css", "./blank-screen.css"]
})
export class BlankScreenComponent {

    screenTouched = false;
    stackLayout;
    directions = new Directions;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private page: Page,
                // private stackLayout: StackLayout
    ) {
        this.stackLayout = page.getViewById("view");
        this.directions.available().then(avail => {
            console.log(avail ? "Yes" : "No");
        });
    }

    onTouch(){
        this.screenTouched = true;
        setTimeout(function() {this.screenTouched = false;}, 10000);
    }

    getDirections() {
        this.directions.navigate({
            from: { // optional, default 'current location'
                lat: 40.4857792,
                lng: -111.9423779
            },
            to: [{ // if an Array is passed (as in this example), the last item is the destination, the addresses in between are 'waypoints'.
                address: "Taqueria 27, 4670 Holladay Blvd E, Holladay, UT 84117",
            }],
            ios: {
                preferGoogleMaps: true, // If the Google Maps app is installed, use that one instead of Apple Maps, because it supports waypoints. Default true.
                allowGoogleMapsWeb: true // If waypoints are passed in and Google Maps is not installed, you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored), or you can open Google Maps on web so all waypoints are shown (set this property to true). Default false.
            }
        }).then(() => {
            console.log("Maps app launched.");
        }, error => {
            console.log(error);
        });
    }

    navigate() {
        this.router.navigate(["/navigation"]);
    }

    arrived() {
        this.router.navigate(["/list"]);
    }
}