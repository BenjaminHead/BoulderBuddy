import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";

@Component({
    selector: "login",
    providers: [UserService],
    templateUrl: "./pages/login/login.html",
    styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})
export class LoginComponent {
    user: User;
    isLoggingIn = true;

    constructor(private router: Router,
                private userService: UserService,
                private firebaseService: FirebaseService) {
        this.user = new User();
        this.user.email = "nativescriptrocks@telerik.com";
        this.user.password = "password";
    }
    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }
    login() {
        console.log("User before function call", this.user);
        this.firebaseService.getUser().then((result: any) => {
            console.log("The signed in user is....", result);
            this.user = result;
        }).then(() => {
            this.firebaseService.login(this.user.email, this.user.password)
                .then(
                    () =>
                        this.router.navigate(["/list"], {queryParams: {
                            'user': this.user
                        }
                        }),
                    (error) => alert("Unfortunately we could not find your account.")
                );
        });

    }
    signUp() {
        this.firebaseService.register(this.user)
            .then(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }
    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}