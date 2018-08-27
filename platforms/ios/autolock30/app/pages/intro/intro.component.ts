import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";

@Component({
    selector: "intro",
    moduleId: module.id,
    templateUrl: "./intro.html",
    styleUrls: ["./intro-common.css", "./intro.css"]
})
export class IntroComponent {
    constructor(private router: Router,
                private firebaseService: FirebaseService) {
    }

    start() {
        this.router.navigate(["/tour"]);
    }
}