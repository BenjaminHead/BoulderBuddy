import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Trip } from "./trip";
import { Config } from "../config";
import { FirebaseService } from "../services/firebase.service";

@Injectable()
export class TripService {

    http = new XMLHttpRequest();

    params;

    constructor() {}

    currentTrip() {}

    thisWeek() {}

    thisMonth() {}

    sendLocationData() {
        this.params = {odometer: "5",
        time: "5:0:3"};
        this.http.open("POST", 'https://amora-2cc4c.firebaseio.com/trip' + this.params, true)
    }
}

