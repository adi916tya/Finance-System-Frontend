import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../user-login/login.classes';
import { WebMService } from '../web-m.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  isSubmitted: boolean = false;
  constructor(private route:Router, private formBuilder:FormBuilder, private webM:WebMService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['',Validators.compose([Validators.required,Validators.email])],
      dob: ['',Validators.required],
      firstName: ['',Validators.required],
      contact: ['',Validators.required], 
      userName: ['',Validators.required],
      password: ['',Validators.required],
      confirmPass: ['',Validators.required], 
      address: ['',Validators.required],
      savingAcc: ['',Validators.required],
      ifse: ['',Validators.required],
  })
  }

  get formDetail(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls; }

    onSubmit = () => { 
      this.isSubmitted = true;
      let registrationDetails = this.registrationForm.value;
      this.webM.registration(registrationDetails).subscribe((res)=>{
      });
     this.route.navigate(['/', 'productlist'])
  }
  onClick(){
    this.route.navigate(['/', 'userlogin'])
 }
 gotoHome(){
  this.route.navigate(['/', 'home'])
}
reset(){
  this.registrationForm.reset()
}
}
