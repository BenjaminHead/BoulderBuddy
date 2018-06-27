import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { IntroComponent } from "./pages/intro/intro.component";
import { TourComponent } from "./pages/tour/tour.component";
import {TourLockComponent} from "./pages/tour/tour-lock.component";
import {TourEarnComponent} from "./pages/tour/tour-earn.component";
import {TourPartnersComponent} from "./pages/tour/tour-partners.component";
import {BlankScreenComponent} from "./pages/blank-screen/blank-screen.component";
import {ThanksComponent} from "./pages/thanks/thanks.component";
import { NavigationComponent } from "./pages/navigation/navigation.component";

export const routes = [
    { path: "login", component: LoginComponent },
    { path: "list", component: ListComponent },
    { path: "list/:user", component: ListComponent },
    { path: "recover-password", component: RecoverPasswordComponent },
    { path: "", component: IntroComponent },
    { path: "tour", component: TourComponent },
    { path: "lock", component: TourLockComponent },
    { path: "earn", component: TourEarnComponent },
    { path: "partners", component: TourPartnersComponent },
    { path: "blank", component: BlankScreenComponent},
    { path: "blank/:user", component: BlankScreenComponent},
    { path: "thanks", component: ThanksComponent},
    { path: "navigation", component: NavigationComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    RecoverPasswordComponent,
    IntroComponent,
    TourComponent,
    TourLockComponent,
    TourEarnComponent,
    TourPartnersComponent,
    BlankScreenComponent,
    ThanksComponent,
    NavigationComponent
];