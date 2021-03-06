import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";
import { isAndroid, isIOS } from "tns-core-modules/platform";
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Page } from "tns-core-modules/ui/page";
import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures";
import { Directions } from "nativescript-directions";
import { MapView } from 'nativescript-google-maps-sdk';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { TripService } from "../../shared/trip/trip.service";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Component({
    selector: "blank-screen",
    providers: [FirebaseService],
    templateUrl: "./pages/blank-screen/blank-screen.html",
    styleUrls: ["./pages/blank-screen/blank-screen-common.css", "./pages/blank-screen/blank-screen.css"]
})
export class BlankScreenComponent implements OnInit {

    screenTouched = false;
    stackLayout;
    directions = new Directions;
    toDestination;
    fromDestination;
    tripData;
    recentTrip;
    user;

    coords = false;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private tripService: TripService,
                private page: Page,
                private http: Http,
                private route: ActivatedRoute
    ) {
        this.stackLayout = page.getViewById("view");
        this.directions.available().then(avail => {
            console.log(avail ? "Yes" : "No");
        });
    }

    locOnLock: any;
    locOnArrival: any;
    latLong;

    ngOnInit() {
        this.setLatLong().then((result)=>{
            this.locOnLock = result;
            console.log("Location on lock", this.locOnLock);
        });
    }

    onTouch(){
        this.screenTouched = true;
    }

    setLatLong() {
        this.latLong = getCurrentLocation({desiredAccuracy: 3}).then(function(loc){
            if (loc) {
                let lat = JSON.stringify(loc.latitude);
                let long = JSON.stringify(loc.longitude);
                let locOnLock = lat + ',' + long;
                return locOnLock;
            }
        }, function(e){
            console.log("Error: " + e.message);
        });
        return this.latLong;
    }

    getDirections() {
        this.directions.navigate({
            from: { // optional, default 'current location'
                address: this.toDestination
            },
            to: [{ // if an Array is passed (as in this example), the last item is the destination, the addresses in between are 'waypoints'.
                address: this.fromDestination
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

    sendTripData(){
        if(!this.fromDestination){
            this.coords = true;
            this.fromDestination = this.locOnLock;
        }
        if(!this.toDestination){
            this.coords = true;
            this.toDestination = this.locOnArrival;
        }
        this.tripService.setConfigUrl(this.fromDestination, this.toDestination, this.coords);
        // this.tripService.setFirebaseTripUrl();
        this.tripData = this.tripService.showConfigResponse();
    }

    navigate() {
        this.router.navigate(["/navigation"]);
    }

    arrived() {
        if(!this.fromDestination || this.fromDestination === '') {
            this.setLatLong().then((result)=>{
                this.locOnArrival = result;
                console.log("Location on arrival", result);
                this.sendTripData();
            });
        } else {
            this.sendTripData();
        }
        this.router.navigate(["/thanks"]);
    }
}