import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebMRoutingModule } from './web-m-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { CommonMModule } from 'src/app/component/common/common.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegistrationComponent,
    HomeComponent,
    DashboardComponent,
    ProductListComponent,
    ProductInfoComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    WebMRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonMModule,
    HttpClientModule,
      
   ]
})
export class WebMModule { }
