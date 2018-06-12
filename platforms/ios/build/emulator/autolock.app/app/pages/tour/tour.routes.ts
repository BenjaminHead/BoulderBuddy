import { Routes } from "@angular/router";
import { TourComponent } from "./tour.component";
import { TourLockComponent } from "./tour-lock.component";
import { TourEarnComponent } from "./tour-earn.component";
import { TourPartnersComponent } from "./tour-partners.component";

export const TourRoutes: Routes = [
    {
        path: '',
        component: TourComponent
    },
    {
        path: 'seed-lock',
        component: TourLockComponent
    },
    {
        path: 'seed-earn',
        component: TourEarnComponent
    },
    {
        path: 'seed-partners',
        component: TourPartnersComponent
    }
];