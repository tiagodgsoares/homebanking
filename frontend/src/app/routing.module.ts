import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'overview', component: OverviewComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
