import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  gotoRegistration(){
    this.route.navigate(['/', 'registration'])
  }
  onClick(){
    this.route.navigate(['/', 'pay'])
 }
 gotoProductInfo(){
  this.route.navigate(['/', 'productinfo'])
}
gotoHome(){
  this.route.navigate([''])
}
}
