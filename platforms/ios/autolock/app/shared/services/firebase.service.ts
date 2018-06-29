import { Injectable, Input, OnInit } from "@angular/core";
import * as Firebase from 'nativescript-plugin-firebase';
import { Trip } from "../trip/trip";
// import { Goal } from '../models/goal.model';
// import { Daily } from '../models/daily.model';


@Injectable()
export class FirebaseService implements OnInit {

    user;
    tripTemplate = {
        travelTime: '',
        distanceTraveled: '',
        averageSpeed: '',
        pointsEarned: '',
        date: new Date
    };

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
                console.log("Alright, what's here?", result);
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
        console.log("Called at all?");
        this.getUser().then((result) => {
            console.log("What the hell...", result);
            if (result.key) {
                this.user.uid = result.key;
            } else {
                this.user = result;
            }
            console.log("Here is the trip", JSON.stringify(trip.rows[0].elements[0].duration.text));
            console.log("What the fuck is undefined about this!? I gave it a fucking value!?", this.tripTemplate);
            this.tripTemplate.travelTime = JSON.stringify(trip.rows[0].elements[0].duration.text);
            this.tripTemplate.distanceTraveled = JSON.stringify(trip.rows[0].elements[0].distance.text);
            this.tripTemplate.pointsEarned = JSON.stringify(trip.rows[0].elements[0].duration.value);
            this.tripTemplate.date = new Date;
        });
        return Firebase.push('/trips/' + this.user.uid, this.tripTemplate)
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getTripInfo() {
        this.getUser().then((result) => {
            if (result.key) {
                this.user.uid = result.key;
            } else {
                this.user = result;
            }
        });
        return Firebase.getValue('/trips/' + this.user.uid)
            .then((data) => {
                console.log(JSON.stringify(data));
                return JSON.stringify(data);
            })
            .catch((error) => {
                console.log(error);
            })
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
                        console.log("User returned", data);
                        this.user = data.value;
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
}
