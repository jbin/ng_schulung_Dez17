import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product: Product = new Product(0, 'Hallo', 23);

  constructor() { }

  ngOnInit() {
  }

  raisePrice() {
    this.product.price += 5;
  }

}
