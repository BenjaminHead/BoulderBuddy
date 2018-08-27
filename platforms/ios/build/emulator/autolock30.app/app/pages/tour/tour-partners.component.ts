import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'seed-partners',
    templateUrl: './tour-partners.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./tour-common.css']
})

export class TourPartnersComponent {
    public component = '';

    constructor(private router: Router) {
        this.component = 'partners';
        console.log(this.component);
    }

    public nextTab() {
        this.router.navigate(["/login"]);
    }
}