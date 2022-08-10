import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { LoginComponent } from '../login/login.component';
import { VerifyUserComponent } from '../verify-user/verify-user.component';

const routes: Routes = [
  {path: 'logincomponent', component:LoginComponent},
  {path: 'verifyusercomponent', component:VerifyUserComponent},
  {path: 'admindashboardcomponent', component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMRoutingModule { }
