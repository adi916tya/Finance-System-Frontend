import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMRoutingModule } from './admin-m-routing.module';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { LoginComponent } from '../login/login.component';
import { VerifyUserComponent } from '../verify-user/verify-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonMModule } from 'src/app/component/common/common.module';


@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent,
    VerifyUserComponent,
  ],
  imports: [
    CommonModule,
    AdminMRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonMModule
  ]
})
export class AdminMModule { }
