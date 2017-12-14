import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product>;

  constructor(private pService: ProductService) {
    this.productList = this.pService.loadProducts();
  }

  ngOnInit() {
  }

}
