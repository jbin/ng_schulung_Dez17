import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  loadProducts(): Observable<Array<Product>> {
    return this.http.get<Product[]>('http://train100:8080/api/products');
  }

  saveProduct(p: Product) {
    return this.http.post<Product>('http://train100:8080/api/products', p);
  }

  deleteProduct(p: Product) {
    return this.http.delete('http://train100:8080/api/products/' + p.id);
  }
}

export class MockProductService {

  loadProducts(): Observable<Array<Product>> {
    const products = [
      {
        'name': 'Granitstein',
        'id': 1,
        'price': 12.54,
        'weight': 200
      },
      {
        'name': 'Marmor',
        'id': 2,
        'price': 76.32,
        'weight': 120
      }
    ];
    return Observable.of(products);
  }

  saveProduct(p: Product) {
    p.id = 99;
    return Observable.of(p);
  }

  deleteProduct(p: Product) {
    return Observable.of(true);
  }

}
