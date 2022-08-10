import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from './login.classes';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
 loginForm!: FormGroup;
 isSubmitted: boolean = false;
 loginModule!: LoginModel;
 constructor(private formBuilder: FormBuilder,  private route: Router) {

 }

 ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
         email: ['',Validators.compose([Validators.required,Validators.email])],
         password: ['',Validators.required],
     })
 }
 get formDetail(): { [key: string]: AbstractControl } {
  return this.loginForm.controls; }
 
 onSubmit = () => {
     this.isSubmitted = true;
     if (!this.loginForm.valid) {
         return;
     }
    
    this.route.navigate(['/', 'productlist'])
 }

  onClick(){
     this.route.navigate(['/', 'registration'])
  }
  gotoForgetPage(){
    this.route.navigate(['/', 'forgetpassword'])
  }
  gotoHome(){
    this.route.navigate(['/', 'home'])
  }
}
