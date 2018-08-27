import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'seed-earn',
    templateUrl: './tour-earn.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./tour-common.css']
})

export class TourEarnComponent {
    public component = '';

    constructor(private router: Router) {
        this.component = 'earn';
        console.log(this.component);
    }

    public nextTab() {
        this.router.navigate(["/partners"]);
    }
}