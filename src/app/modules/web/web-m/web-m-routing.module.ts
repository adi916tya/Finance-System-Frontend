import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { HomeComponent } from '../home/home.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { TermsComponent } from '../terms/terms.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pay', component: DashboardComponent },
  { path: 'home/userlogin', component: UserLoginComponent },
  { path: 'home/registration', component: UserRegistrationComponent },
  { path: 'home/userlogin/productlist', component: ProductListComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'dashbord', component: DashboardComponent },
  { path: 'productinfo', component: ProductInfoComponent },
  { path: 'productlist', component: ProductListComponent },
  {path: 'changepassword', component:ChangePasswordComponent},
  {path: 'forgetpassword', component:ForgetPasswordComponent},
  {path: 'TermsandCondition',component:TermsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebMRoutingModule { }
