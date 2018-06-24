import { Component } from "@angular/core";
import {BackgroundGeolocation} from "nativescript-background-geolocation-lt";
import { Router } from "@angular/router";
import { Trip } from "../../shared/trip/trip";
import { TripService } from "../../shared/trip/trip.service";
import { FirebaseService } from "../../shared/services/firebase.service";

@Component({
    selector: "thanks",
    moduleId: module.id,
    templateUrl: "./thanks.html",
    styleUrls: ["./thanks-common.css", "./thanks.css"]
})
export class ThanksComponent {

    trip: Trip;
    user;

    constructor(private router: Router,
                private firebaseService: FirebaseService) {
        this.firebaseService.getUser().then((result) => function(){
            this.user = result;
            this.firebaseService.getTripInfo(this.user.id).then((result) => function(){
                this.trip.travelTime = '';
                this.trip.distanceTraveled = '';
                this.trip.averageSpeed = '';
                this.trip.pointsEarned = '';
                this.trip.week = true;
                this.trip.month = true;
            });
        });
    }

    share(){
        this.router.navigate(["/"]);
    }

    yourRank(){
        this.router.navigate(["/"]);
    }

    redeem(){
        this.router.navigate(["/"]);
    }

}