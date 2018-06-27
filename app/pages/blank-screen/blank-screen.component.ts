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
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { TripService } from "../../shared/trip/trip.service";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Component({
    selector: "blank-screen",
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

    ngOnInit() {
        // this.route.queryParams.subscribe(params => {
        //     this.user = params['user'];
        //     console.log("User is...", this.user);
        // });
        // if(!this.user){
        //     this.user = this.firebaseService.getUser();
        // }
    }

    onTouch(){
        this.screenTouched = true;
        setTimeout(function() {this.screenTouched = false;}, 10000);
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
        this.tripService.setConfigUrl(this.fromDestination, this.toDestination);
        this.tripData = this.tripService.showConfigResponse(this.user);
    }

    getTripData(){
        return this.firebaseService.getTripInfo();
    }

    navigate() {
        this.router.navigate(["/navigation"]);
    }

    arrived() {
        this.sendTripData();
        this.recentTrip = this.getTripData();
            console.log("Trip data is here...", JSON.stringify(this.recentTrip));
            this.router.navigate(["/thanks"], {queryParams: {
                'trip': this.recentTrip
            }
        });

    }
}