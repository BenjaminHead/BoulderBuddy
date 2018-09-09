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
    selector: "log-boulder",
    providers: [FirebaseService],
    templateUrl: "./pages/log-boulder/log-boulder.html",
    styleUrls: ["./pages/log-boulder/log-boulder-common.css", "./pages/log-boulder/log-boulder.css"]
})
export class LogBoulderComponent implements OnInit {

    screenTouched = false;
    stackLayout;
    directions = new Directions;
    location;
    user;
    area;
    recentlyAdded;

    coords = false;
    boulder = {
        name: '',
        location: '',
        problems: []
    };

    problem = {
        grade: '',
        name: ''
    };

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
        // this.setLatLong().then((result)=>{
        //     this.locOnLock = result;
        //     console.log("Location on lock", this.locOnLock);
        // });
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

    getLocation(){
        this.setLatLong().then((result)=>{
            this.location = result;
            console.log("Current Location", this.location)
        })
    }

    addProblem(){
        this.boulder.problems.push(this.problem);
        console.log("Boulder problems", this.boulder.problems);
        this.recentlyAdded = this.problem.name;
    }

    clearProblems(){
        this.boulder.problems = [];
        this.problem.grade = '';
        this.problem.name = '';
    }

    logBoulder() {
        if(!this.boulder.problems) {
            alert("Log some boulders");
        } else {
            this.boulder.location = this.location;
            console.log("Boulder before assignments", this.boulder.problems);
            this.firebaseService.checkForDuplicates(this.boulder, this.area)
                .then((result)=>{
                    console.log("True or false?", result)
                    if (result === true) {
                        console.log("True", result);
                        this.firebaseService.sendBoulderInfo(this.boulder, this.area);
                    } else {
                        alert("Duplicate name detected");
                    }
                }).catch((error)=>{
                console.log(error)
            })
        }
    }
}