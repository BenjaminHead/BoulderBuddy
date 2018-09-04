import { Component, OnInit } from "@angular/core";
import {BackgroundGeolocation} from "nativescript-background-geolocation-lt";
import { Router, ActivatedRoute } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";

@Component({
    selector: "list",
    providers: [FirebaseService],
    templateUrl: "./pages/list/list.html",
    styleUrls: ["./pages/list/list-common.css", "./pages/list/list.css"]
})
export class ListComponent implements OnInit {

    tripInfo;
    user;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private route: ActivatedRoute) {
        this.user = this.firebaseService.getUser();
        this.tripInfo = {
            odometer: 5,
            tripTime: 10
        }
    }

    ngOnInit() {
        //
    }

    startTracking() {
        BackgroundGeolocation.configure({
            url: 'https://boulderbuddy-62d91.firebaseio.com/trips',
            httpRootProperty: '.',
            desiredAccuracy: 0,
            distanceFilter: 5,
            preventSuspend: true,
            heartbeatInterval: 60
        });
        BackgroundGeolocation.start();
        this.router.navigate(["/blank"]);
    }

    logTrip() {
        BackgroundGeolocation.setConfig({logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE, function() {
            console.log("Changed logLevel success");
        }});
        BackgroundGeolocation.getLog(function(log){
           console.log(log);
        });
        this.firebaseService.sendTripInfo(this.tripInfo);
    }

    stopTracking() {
        BackgroundGeolocation.stop();
    }

}