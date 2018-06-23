import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { FirebaseService} from "../services/firebase.service";
import { Trip } from "./trip";
import { Config } from "../config";

@Injectable()
export class TripService {

    params;
    config;
    tripData;
    user;

    constructor(private http: HttpClient,
                private firebaseService: FirebaseService) {
        this.user = this.firebaseService.getUser();
        console.log("User is...", this.user);
    }

    currentTrip() {}

    thisWeek() {}

    thisMonth() {}

    configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';

    setConfigUrl(origin, destination) {
        console.log("Okay...", origin, destination);
        let newOrigin = origin.split(' ').join('+');
        let newDestination = destination.split(' ').join('+');
        return this.configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + newOrigin + '&destinations=' + newDestination + '&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';
    }

    getConfig() {
        console.log('1');
        return this.http.get<Object>(this.configUrl);
    }

    showConfig() {
        console.log('2');
        this.getConfig()
            .subscribe((data: Object) => this.config = { ...data });
    }

    getConfigResponse(): Observable<HttpResponse<Object>> {
        console.log('3', this.configUrl);
        return this.http.get<Object>(
            this.configUrl, { observe: 'response' });
    }

    showConfigResponse(user) {
        console.log('4', this.configUrl, user);
        this.getConfigResponse()
        // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                console.log("Is this even working?", resp.body);
                // access the body directly, which is typed as `Config`.
                this.config = { ... resp.body };
                this.tripData = resp.body;
                console.log("What the fuck happened to my user?", JSON.stringify(user));
                this.firebaseService.sendTripInfo(user, this.tripData);
            });
    }

    getCommonHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", Config.authHeader);
        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}

