import { Injectable, Input, OnInit } from "@angular/core";
import * as Firebase from 'nativescript-plugin-firebase';
import { Trip } from "../trip/trip";
import { TripService } from "../trip/trip.service";
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
        date: ''
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
            let newDate = new Date;
            this.tripTemplate.date = newDate.toString();
            return Firebase.push('/trips/' + this.user.uid, this.tripTemplate)
                .then((data) => {
                    return data;
                })
                .catch((error) => {
                    console.log(error);
                })
        });
    }

    getTripInfo() {
        this.getUserKey().then((result) => {
                this.user.uid = result;
            return Firebase.getValue('/trips/' + this.user.uid)
                .then((data) => {
                    return data;
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
