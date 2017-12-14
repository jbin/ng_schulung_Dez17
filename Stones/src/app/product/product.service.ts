import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

  private productList: Array<Product> = [];

  constructor() {
    this.productList.push(new Product(0, 'Auf Wiedersehen', 323));
    this.productList.push(new Product(9, 'Hallo', 43));
   }

  loadProducts(): Array<Product> {
    return this.productList;
  }
}
