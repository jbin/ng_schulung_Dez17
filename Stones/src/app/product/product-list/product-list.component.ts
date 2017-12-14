import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product> = [];

  constructor() {
    this.productList.push(new Product(0, 'Auf wiedersehen', 323));
    this.productList.push(new Product(9, 'Hallo', 43));
  }

  ngOnInit() {
  }

}
