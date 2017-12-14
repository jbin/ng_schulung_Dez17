import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { BruttoPipe } from './brutto.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import {MatInputModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, BrowserAnimationsModule, MatInputModule, MatButtonModule
  ],
  declarations: [ItemComponent, BruttoPipe, ProductFormComponent],
  exports: [ItemComponent, BruttoPipe, ProductFormComponent]
})
export class ProductModule { }
