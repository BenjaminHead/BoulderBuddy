import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';

export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent },
    { path: "recover-password", component: RecoverPasswordComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent
];