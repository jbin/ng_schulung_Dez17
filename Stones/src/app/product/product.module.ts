import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { BruttoPipe } from './brutto.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, MatInputModule
  ],
  declarations: [ItemComponent, BruttoPipe, ProductFormComponent],
  exports: [ItemComponent, BruttoPipe, ProductFormComponent]
})
export class ProductModule { }
