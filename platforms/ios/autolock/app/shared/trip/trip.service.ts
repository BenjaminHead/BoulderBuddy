import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Trip } from "./trip";
import { Config } from "../config";
import { FirebaseService } from "../services/firebase.service";

@Injectable()
export class TripService {
    constructor(private http: HttpClient) {}

    params;
    config;

    currentTrip() {}

    thisWeek() {}

    thisMonth() {}

    // sendLocationData() {
    //     this.params = {odometer: "5",
    //     time: "5:0:3"};
    //     this.http.open("POST", 'https://amora-2cc4c.firebaseio.com/trip' + this.params, true)
    // }

    configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';


    setConfigUrl(origin, destination) {
        console.log("Okay...", origin, destination);
        this.configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + origin + '&destinations=' + destination + '&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';
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
        console.log('3');
        return this.http.get<Object>(
            this.configUrl, { observe: 'response' });
    }

    showConfigResponse() {
        console.log('4');
        this.getConfigResponse()
        // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                console.log("Is this even working?");
                // access the body directly, which is typed as `Config`.
                this.config = { ... resp.body };
            });
    }

    getTripData(origin, destination) : Observable<Object> {
        return this.http.get(
            'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w'
        ).map((response:Response)=> response.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
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

