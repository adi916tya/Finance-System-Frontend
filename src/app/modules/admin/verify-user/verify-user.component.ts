import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goto() {
    this.route.navigate(['/', 'admindashboardcomponent'])
  }
}
