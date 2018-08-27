import { Injectable, Input, OnInit } from "@angular/core";
import * as Firebase from 'nativescript-plugin-firebase';
import { Trip } from "../trip/trip";
import { TripService } from "../trip/trip.service";
import * as moment from 'moment';
// import { Goal } from '../models/goal.model';
// import { Daily } from '../models/daily.model';


@Injectable()
export class FirebaseService implements OnInit {

    user;
    tripTemplate = {
        destination: '',
        origin: '',
        travelTime: '',
        distanceTraveled: '',
        averageSpeed: '',
        pointsEarned: '',
        date: '',
        uid: ''
    };

    // constructor(private tripService: TripService){}

    ngOnInit(): void {}
    login(email, password): any {

        return Firebase.login({
            type: Firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: email,
                password: password
            }
        })
            .then((result) => {
                console.log("user logged in", email, password);
                console.log("Result of login", result, Firebase);
                return result;
            })
            .catch((error) => {
                return error;
            });

    }

    getAllUsers (){
        return Firebase.getValue('/users/')
            .then((data)=> {
                return data;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    logout() {
        Firebase.logout();
    }

    register(user) {
        return Firebase.createUser({
            email: user.email,
            password: user.password
        })
            .then((result: any) => {
                console.log("user registered", user);
                user.uid = result.key;
                return Firebase.setValue('/users/' + result.key, user)
                    .then((data) => {
                        return data;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    sendBoulderInfo(boulder, area){
        return Firebase.update('/boulders/' + area, boulder);
    }

    sendTripInfo(trip) {
        this.getUserKey().then((result) => {
            this.user.uid = result;
            console.log("Here's the trip", trip);
            if (trip.destination_addresses) {
                this.tripTemplate.destination = trip.destination_addresses;
            }
            if (trip.origin_addresses) {
                this.tripTemplate.origin = trip.origin_addresses;
            }
            if (trip.rows[0].elements[0].status != "NOT_FOUND") {
                this.tripTemplate.travelTime = trip.rows[0].elements[0].duration.text;
            }
            if (trip.rows[0].elements[0].status != "NOT_FOUND") {
                this.tripTemplate.distanceTraveled = trip.rows[0].elements[0].distance.text;
            }
            if (trip.rows[0].elements[0].status != "NOT_FOUND") {
                this.tripTemplate.pointsEarned = JSON.stringify(trip.rows[0].elements[0].duration.value);
            }
            let newDate = moment().format("YYYY-MM-DD");
            this.tripTemplate.date = newDate.toString();
            this.tripTemplate.uid = this.user.uid;
            console.log("Moment date", this.tripTemplate.date);
            return Firebase.push('/trips/' + this.user.uid, this.tripTemplate)
                .then((data) => {
                    return data;
                })
                .catch((error) => {
                    console.log(error);
                })
        });
    }

    redeemPoints(points) {
        this.getUserKey().then((result) => {
            this.user.uid = result;
            let newDate = moment().format("YYYY-MM-DD");
            this.tripTemplate.date = newDate.toString();
            this.tripTemplate.uid = this.user.uid;
            this.tripTemplate.pointsEarned = points;
            return Firebase.push('/trips/' + this.user.uid, this.tripTemplate)
                .then((data) => {
                    return data;
                })
                .catch((error) => {
                    console.log(error);
                })
        });
    }

    getPointsFromTrips() {
        return this.getUserKey().then((result) => {
            let points = [];
            this.user.uid = result;
            return Firebase.getValue('/trips/' + this.user.uid)
                .then((data) => {
                    let trips = data.value;
                    for (let key in trips) {
                        // skip loop if the property is from prototype
                        if (!trips.hasOwnProperty(key)) continue;
                        let obj = trips[key];
                        points.push(obj.pointsEarned);
                    }
                    console.log("This is the point value returned", points);
                    return points;
                })
                .catch((error) => {
                    console.log(error);
                })
        });
    }

    sendPointsFromTrips(points) {
        return this.getUserKey().then((result) => {
            this.user.uid = result;
            return Firebase.setValue('/points/' + this.user.uid, points)
                .then((data) => {
                return data;
            })
                .catch((error) => {
                    console.log(error);
                })
        });
    }

    getTripInfo() {
        return this.getUserKey().then((result) => {
                this.user.uid = result;
            return Firebase.getValue('/trips/' + this.user.uid)
                .then((data) => {
                console.log("This is the data returned", data.value);
                    return data.value;
                })
                .catch((error) => {
                    console.log(error);
                })
        });


        // return Firebase.getValue('/trips/' + this.user.uid)
        //     .then((data) => {
        //     console.log("Got...");
        //         console.log(JSON.stringify(data));
        //         return JSON.stringify(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }

    resetPassword(email) {
        return Firebase.resetPassword( {
            email: email
        }).then((result: any) => {
            alert("email sent");
            return result;
        }).catch((error) => {
            console.log(error);
        })
    }

    getUser() {
        return Firebase.getCurrentUser()
            .then((user) => {
                return Firebase.getValue('/users/' + user.uid)
                    .then((data) => {
                        return data.value;
                    })
                    .catch((error) => {
                        console.log("Nope");
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log("Trouble in paradise: " + error)
            });
    }

    getUserKey() {
        return Firebase.getCurrentUser()
            .then((user) => {
                return Firebase.getValue('/users/' + user.uid)
                    .then((data) => {
                        if(data.value === undefined) {
                            this.user.uid = data.key;
                            return data.key;
                        } else {
                            this.user = data.value;
                            return data.key;
                        }
                    })
                    .catch((error) => {
                        console.log("Nope");
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log("Trouble in paradise: " + error)
            });
    }
}
