import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseService } from "../../shared/services/firebase.service";
import { isAndroid, isIOS } from "tns-core-modules/platform";
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Page } from "tns-core-modules/ui/page";
import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures";

@Component({
    selector: "blank-screen",
    moduleId: module.id,
    templateUrl: "./blank-screen.html",
    styleUrls: ["./blank-screen-common.css", "./blank-screen.css"]
})
export class BlankScreenComponent {

    screenTouched = false;
    stackLayout;

    constructor(private router: Router,
                private firebaseService: FirebaseService,
                private page: Page,
                // private stackLayout: StackLayout
    ) {
        this.stackLayout = page.getViewById("view");
    }

    onTouch(){
        this.screenTouched = true;
        setTimeout(function() {this.screenTouched = false;}, 10000);
    }

    arrived() {
        this.router.navigate(["/list"]);
    }
}