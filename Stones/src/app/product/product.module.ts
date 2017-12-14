import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { BruttoPipe } from './brutto.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import {MatInputModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ProductFormComponent}
];

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatInputModule, MatButtonModule, RouterModule.forChild(routes)
  ],
  declarations: [ItemComponent, BruttoPipe, ProductFormComponent, ProductListComponent],
  exports: [ItemComponent, BruttoPipe, ProductFormComponent]
})
export class ProductModule { }
