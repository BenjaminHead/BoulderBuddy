import { Component } from "@angular/core";
import {BackgroundGeolocation} from "nativescript-background-geolocation-lt";

BackgroundGeolocation.configure({
    desiredAccuracy: 0,
    distanceFilter: 5,
    preventSuspend: true,                                                                                                                                       
    heartbeatInterval: 60
});

@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.html",
    styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent {
    constructor() {}

    startTracking() {
        BackgroundGeolocation.start();
    }

    stopTracking() {
        BackgroundGeolocation.stop();
    }

}