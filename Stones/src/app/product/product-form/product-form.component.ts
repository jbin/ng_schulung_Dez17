import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  // name = 
    get name() { return this.productForm.get('name'); }
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    price: new FormControl(null, [Validators.required]),
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
