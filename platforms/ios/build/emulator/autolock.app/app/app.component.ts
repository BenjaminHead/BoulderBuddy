import { Component } from "@angular/core";
import { FirebaseService } from "./shared/services/firebase.service";
import { Router } from "@angular/router";

@Component({
    selector: "main",
    template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
    constructor(private firebaseService: FirebaseService,
                router: Router){
        this.firebaseService.getUser().then((result:any) => function(){
            let user = result;
            console.log("What's the result now?", user);
        });
        // if(this.firebaseService.getUser()) {
        //     router.navigate(["/login"]);
        // }
    }
}