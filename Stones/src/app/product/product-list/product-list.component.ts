import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Observable<Array<Product>>;

  constructor(private pService: ProductService) {
    this.load();
  }

  load() {
    this.productList = this.pService.loadProducts();
  }

  deleteProduct(product: Product) {
    this.pService.deleteProduct(product).subscribe(
      () => alert('Produkt gelöscht'),
      () => alert('Produkt konnte nicht gelöscht werden'),
      () => this.load()
    );
  }

  ngOnInit() {
  }

}
