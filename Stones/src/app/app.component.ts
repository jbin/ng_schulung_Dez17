import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stn';
  productList: Array<Product> = [];

  constructor() {
    this.productList.push(new Product(0, 'Auf wiedersehen', 323));
    this.productList.push(new Product(9, 'Hallo', 43));
  }
}
