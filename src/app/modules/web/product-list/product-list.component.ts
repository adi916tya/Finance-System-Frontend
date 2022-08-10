import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
 
  gotoProductInfo(){
    this.route.navigate(['/', 'productinfo'])
  }
  gotoHome(){
    this.route.navigate([''])
  }
}
