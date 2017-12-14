import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    weight: new FormControl(),
  });

  data: any;
  constructor() { }

  ngOnInit() {
  }

  save() {
    this.data = this.productForm.value;
    this.data.id = 0;
  }



}
