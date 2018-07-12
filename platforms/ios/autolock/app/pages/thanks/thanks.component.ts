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
export class ThanksComponent implements OnInit{

    trip = {
        destination: '',
        origin: '',
        travelTime: '',
        distanceTraveled: '',
        averageSpeed: '',
        pointsEarned: '',
        date: ''
    };
    user;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private tripService: TripService,
                private route: ActivatedRoute) {
    }

    ngOnInit (){
        this.tripService.showFirebaseTripResponse();
        this.firebaseService.getTripInfo();
    }

    // getTripData(){
    //     this.firebaseService.getTripInfo().then((result)=>{
    //         console.log("Get trip data result...", result);
    //         return result;
    //     });
    // }

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