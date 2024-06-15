import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NeworderComponent } from './neworder/neworder.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'neworder', component: NeworderComponent },
    { path: 'orderlist', component: OrderlistComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }