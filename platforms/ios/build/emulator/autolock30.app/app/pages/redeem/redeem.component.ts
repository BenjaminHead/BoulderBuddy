import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {BackgroundGeolocation} from "nativescript-background-geolocation-lt";
import { Router, ActivatedRoute } from "@angular/router";
import { Trip } from "../../shared/trip/trip";
import { TripService } from "../../shared/trip/trip.service";
import { FirebaseService } from "../../shared/services/firebase.service";
import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: "redeem",
    providers: [TripService, FirebaseService],
    templateUrl: "./pages/redeem/redeem.html",
    styleUrls: ["./pages/redeem/redeem-common.css", "./pages/redeem/redeem.css"]
})
export class RedeemComponent implements OnInit{

    trip = {
        destination: '',
        origin: '',
        travelTime: '',
        distanceTraveled: '',
        averageSpeed: '',
        pointsEarned: '',
        date: '',
        week: false,
        month: false
    };
    trips = [];
    user;
    partner;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private tripService: TripService,
                private route: ActivatedRoute) {
    }

    ngOnInit (){
        this.route.queryParams.subscribe(params => {
            this.partner = params['partner'];
            console.log(this.partner);
        });
    }

    share(){
        this.router.navigate([""]);
    }

    yourRank(){
        this.router.navigate([""]);
    }

    redeem(){
        this.trip.pointsEarned = "-1000";
        let points = Number(this.trip.pointsEarned);
        console.log("Negative points, right?", points);
        this.tripService.getPointsFromTripDB().then((result) => {
            console.log("Sum is now...", result);
            if (result > points) {
                this.firebaseService.redeemPoints(points);
            } else {
                alert("Not enough points!");
            }
        });
        this.router.navigate([""]);
    }

}