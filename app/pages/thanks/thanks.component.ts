import { Component, OnInit } from "@angular/core";
import {BackgroundGeolocation} from "nativescript-background-geolocation-lt";
import { Router, ActivatedRoute } from "@angular/router";
import { Trip } from "../../shared/trip/trip";
import { TripService } from "../../shared/trip/trip.service";
import { FirebaseService } from "../../shared/services/firebase.service";

@Component({
    selector: "thanks",
    providers: [TripService, FirebaseService],
    templateUrl: "./pages/thanks/thanks.html",
    styleUrls: ["./pages/thanks/thanks-common.css", "./pages/thanks/thanks.css"]
})
export class ThanksComponent {

    trip = {};
    user;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private route: ActivatedRoute) {
        //     .then((result) => function(){
        //     console.log("trip object contains...", result);
        //     this.trip.travelTime = '';
        //     this.trip.distanceTraveled = '';
        //     this.trip.averageSpeed = '';
        //     this.trip.pointsEarned = '';
        //     this.trip.week = true;
        //     this.trip.month = true;
        // });
    }

    ngOnInit (){
        this.route.queryParams.subscribe(params => {
            this.trip = params['trip'];
            console.log("User is...", this.trip);
        });
    }

    share(){
        this.router.navigate([""]);
    }

    yourRank(){
        this.router.navigate([""]);
    }

    redeem(){
        this.router.navigate([""]);
    }

}