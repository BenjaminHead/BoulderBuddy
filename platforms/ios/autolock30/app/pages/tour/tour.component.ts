import { Component } from "@angular/core";

@Component({
    selector: "tour",
    moduleId: module.id,
    templateUrl: "./tour.html",
    styleUrls: ["./tour-common.css", "./tour.css"]
})

export class TourComponent {
    public component = '';

    constructor() {
        this.component = 'lock';
    }

    public nextTab(tab) {
        this.component = tab;
    }
}