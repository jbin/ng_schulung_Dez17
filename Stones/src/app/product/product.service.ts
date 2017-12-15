import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  private productList: Array<Product> = [];

  constructor(private http: HttpClient) {}

  loadProducts(): Observable<Array<Product>> {
    return this.http.get<Product[]>('http://train100:8080/api/products');
  }

  saveProduct(p: Product) {
   return this.http.post<Product>('http://train100:8080/api/products', p);
  }
}
