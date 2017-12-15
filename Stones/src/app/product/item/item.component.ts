import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../product';
import { EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'stn-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product: Product = new Product(0, 'Hallo', 23);
  @Output() productDeleted: EventEmitter<Product> = new EventEmitter();

  myStyle = {
    border : '5px solid'
  };

  constructor() { }

  ngOnInit() {
  }

  raisePrice() {
    this.product.price += 5;
  }

  changePrice(priceInput) {
    this.product.price = priceInput.value;
  }

  deleteProduct(product: Product) {
    this.productDeleted.emit(product);
  }

}
