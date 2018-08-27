import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'seed-lock',
    templateUrl: './tour-lock.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./tour-common.css']
})

export class TourLockComponent {
    public component = '';

    constructor(private router: Router) {
        this.component = 'lock';
        console.log(this.component);
    }

    public nextTab() {
        this.router.navigate(["/earn"]);
    }
}