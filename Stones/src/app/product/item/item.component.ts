import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'stn-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product: Product = new Product(0, 'Hallo', 23);
  @Output() productChange: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  raisePrice() {
    this.product.price += 5;
    this.productChange.emit(this.product);
  }

  changePrice(priceInput) {
    this.product.price = priceInput.value;
  }

}
