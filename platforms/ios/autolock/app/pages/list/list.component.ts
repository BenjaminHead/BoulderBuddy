import { Component } from "@angular/core";
import {BackgroundGeolocation} from "nativescript-background-geolocation-lt";
import { Router } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";

@Component({
    selector: "list",
    providers: [FirebaseService],
    moduleId: module.id,
    templateUrl: "./list.html",
    styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent {

    tripInfo;
    user;

    constructor(private router: Router,
                private firebaseService: FirebaseService) {
        this.user = this.firebaseService.getUser();
        this.tripInfo = {
            odometer: 5,
            tripTime: 10
        }
    }

    startTracking() {
        console.log("Function entered...");
        BackgroundGeolocation.configure({
            url: 'https://amora-2cc4c.firebaseio.com/trip',
            httpRootProperty: '.',
            desiredAccuracy: 0,
            distanceFilter: 5,
            preventSuspend: true,
            heartbeatInterval: 60
        });
        console.log("Begin tracking");
        BackgroundGeolocation.start();
        console.log("Now navigate to");
        // this.router.navigate(["/blank"]);
    }

    logTrip() {
        BackgroundGeolocation.setConfig({logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE, function() {
            console.log("Changed logLevel success");
        }});
        BackgroundGeolocation.getLog(function(log){
           console.log(log);
        });
        this.firebaseService.sendTripInfo(this.user, this.tripInfo);
    }

    stopTracking() {
        BackgroundGeolocation.stop();
    }

}