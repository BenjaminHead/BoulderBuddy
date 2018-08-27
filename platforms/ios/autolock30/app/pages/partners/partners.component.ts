import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {BackgroundGeolocation} from "nativescript-background-geolocation-lt";
import { Router, ActivatedRoute } from "@angular/router";
import { Trip } from "../../shared/trip/trip";
import { TripService } from "../../shared/trip/trip.service";
import { FirebaseService } from "../../shared/services/firebase.service";
import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';

class Partner {
    constructor(public name:string) {}
}

@Component({
    selector: "redeem-partners",
    providers: [TripService, FirebaseService],
    templateUrl: "./pages/partners/partners.html",
    styleUrls: ["./pages/partners/partners-common.css", "./pages/partners/partners.css"]
})
export class PartnersComponent implements OnInit{

    localPartners = [];
    partners = [
        "Red Fuego",
        "Oishii Sushi",
        "Kneaders",
        "Rancherito's"
        ];
    user;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private tripService: TripService,
                private route: ActivatedRoute) {
        for (let i = 0; i < this.partners.length; i++) {
            this.localPartners.push(new Partner(this.partners[i]));
        }
    }

    ngOnInit (){
        // this.tripService.getPointsFromTripDB();
        // this.firebaseService.getTripInfo().then((result)=> {
        //     console.log("Thanks page has received...", result);
        //     console.log(Object.keys(result));
        //     for (let key in result) {
        //         // skip loop if the property is from prototype
        //         if (!result.hasOwnProperty(key)) continue;
        //         let obj = result[key];
        //         console.log(obj);
        //         let today = moment().format("YYYY-MM-DD");
        //         let lastWeek = moment().subtract(7,'d').format('YYYY-MM-DD');
        //         let lastMonth = moment().subtract(1, 'month').format('YYYY-MM-DD');
        //         let now = today.toString();
        //         if(obj.date === now) {
        //             this.trip.destination = obj.destination;
        //             this.trip.origin = obj.origin;
        //             this.trip.travelTime = obj.travelTime;
        //             this.trip.distanceTraveled = obj.distanceTraveled;
        //             this.trip.averageSpeed = obj.distanceTraveled;
        //             this.trip.pointsEarned = obj.pointsEarned;
        //             this.trip.date = obj.date;
        //             this.trips.push(this.trip);
        //         }
        //         if(moment(obj.date).isSameOrAfter(lastWeek)) {
        //             this.trip.destination = obj.destination;
        //             this.trip.origin = obj.origin;
        //             this.trip.travelTime = obj.travelTime;
        //             this.trip.distanceTraveled = obj.distanceTraveled;
        //             this.trip.averageSpeed = obj.distanceTraveled;
        //             this.trip.pointsEarned = obj.pointsEarned;
        //             this.trip.date = obj.date;
        //             this.trip.week = true;
        //             this.trips.push(this.trip);
        //         }
        //         if(moment(obj.date).isSameOrAfter(lastMonth)) {
        //             this.trip.destination = obj.destination;
        //             this.trip.origin = obj.origin;
        //             this.trip.travelTime = obj.travelTime;
        //             this.trip.distanceTraveled = obj.distanceTraveled;
        //             this.trip.averageSpeed = obj.distanceTraveled;
        //             this.trip.pointsEarned = obj.pointsEarned;
        //             this.trip.date = obj.date;
        //             this.trip.month = true;
        //             this.trips.push(this.trip);
        //         }
        //     }
        // });
    }

    share(){
        this.router.navigate([""]);
    }

    yourRank(){
        this.router.navigate([""]);
    }

    redeem(partners){
        this.router.navigate(["/redeem"], {queryParams: {
            'partner': partners
        }
        });
    }

}