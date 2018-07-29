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
    tripConfig;
    config;
    tripData;
    user;
    latestTrip;

    constructor(private http: HttpClient,
                private firebaseService: FirebaseService) {
        this.user = this.firebaseService.getUser();
        this.setFirebaseTripUrl();
    }

    currentTrip() {}

    thisWeek() {}

    thisMonth() {}

    configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';

    firebaseUrl = 'https://amora-2cc4c.firebaseio.com/trips';

    setConfigUrl(origin, destination, coords) {
        let newOrigin = '';
        let newDestination = '';
        console.log("Origin and destination in trip service", origin, destination);
        if(!coords) {
            newOrigin = origin.split(' ').join('+');
            newDestination = destination.split(' ').join('+');
        } else {
            newOrigin = origin;
            newDestination = destination;
        }
        this.configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + newOrigin + '&destinations=' + newDestination + '&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';
        return this.configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + newOrigin + '&destinations=' + newDestination + '&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';
    }

    setFirebaseTripUrl() {
        this.firebaseService.getUserKey().then((uid)=> {
            console.log("UID is...", uid);
            this.firebaseUrl = 'https://amora-2cc4c.firebaseio.com/trips' + '/' + uid;
            console.log("URL is...", this.firebaseUrl);
            return this.firebaseUrl;
        });
    }

    getPointsFromTripDB (){
        let points = 0;
        return this.firebaseService.getPointsFromTrips().then((result: any)=>{
                console.log("Length is...", result.length);
            let sum = 0;
                for (let i = 0; i < result.length; i++) {
                    sum += Number(result[i]);
                    console.log("sum is...", sum);
                }
            console.log("sum after loop is...", sum);
            this.firebaseService.sendPointsFromTrips(sum);
            return sum;
        })
    }

    getUserInfoByEmail(){
        this.firebaseService.getAllUsers().then((result)=> function(){
            let users = result;
            console.log("Users listed", users);
        })
    }

    getFirebaseTrip() {
        console.log("get from this URL", this.firebaseUrl);
        return this.http.get<Object>(this.firebaseUrl);
    }

    showFirebaseTrip() {
        this.getFirebaseTrip()
            .subscribe((data: Object) => this.tripConfig = { ...data });
    }

    getFirebaseTripResponse(): Observable<HttpResponse<Object>> {
        console.log('get response', this.firebaseUrl);
        return this.http.get<Object>(
            this.configUrl, { observe: 'response' });
    }

    postFirebaseTripResponse(): Observable<Object>{
        console.log('post response', this.firebaseUrl + this.tripData);
        return this.http.post<Object>(
            this.firebaseUrl + this.tripData, { observe: 'response' });
    }

    showFirebaseTripResponse() {
        this.latestTrip = this.getFirebaseTripResponse()
        // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                // access the body directly, which is typed as `Config`.
                this.tripConfig = { ... resp.body };
                this.tripData = resp.body;
                // this.postFirebaseTripResponse();
                console.log("trip retrieved from firebase", this.firebaseUrl, JSON.stringify(resp.body));
                return JSON.stringify(resp.body);
            });
        console.log("what is this returning?", this.latestTrip);
        return this.latestTrip;
    }

    getConfig() {
        return this.http.get<Object>(this.configUrl);
    }

    showConfig() {
        this.getConfig()
            .subscribe((data: Object) => this.config = { ...data });
    }

    getConfigResponse(): Observable<HttpResponse<Object>> {
        return this.http.get<Object>(
            this.configUrl, { observe: 'response' });
    }

    showConfigResponse() {
        this.getConfigResponse()
        // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                // access the body directly, which is typed as `Config`.
                this.config = { ... resp.body };
                this.tripData = resp.body;
                return this.firebaseService.sendTripInfo(this.tripData);
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

