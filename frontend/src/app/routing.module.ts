import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'overview', component: OverviewComponent },
    { path: 'register', component: RegisterComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
