import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


    get name() { return this.productForm.get('name'); }
  productForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    price: new FormControl(null, [Validators.required]),
    weight: new FormControl(),
  });

  data: any;
  constructor(private pService: ProductService, private router: Router) {
    this.name.valueChanges
    .subscribe(value => this.data = value.length);
  }

  ngOnInit() {
  }

  save() {
    const p: Product = this.productForm.value;
    this.pService.saveProduct(p).subscribe(
      (product) => alert(`Produkt mit ${product.id} angelegt`),
      () => alert('Fehler beim speichern'),
      () => this.router.navigate(['/products'])
    );

  }



}
