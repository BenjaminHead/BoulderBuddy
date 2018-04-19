import { Injectable, Input, OnInit } from "@angular/core";
import * as Firebase from 'nativescript-plugin-firebase';
// import { Goal } from '../models/goal.model';
// import { Daily } from '../models/daily.model';


@Injectable()
export class FirebaseService implements OnInit {


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
                return result;
            })
            .catch((error) => {
                return error;
            });

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

    getUser() {
        return Firebase.getCurrentUser()
            .then((user) => {
                return Firebase.getValue('/users/' + user.uid)
                    .then((data) => {
                        return data.value;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log("Trouble in paradise: " + error)
            });
    }
}
