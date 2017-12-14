import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { BruttoPipe } from './brutto.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemComponent, BruttoPipe],
  exports: [ItemComponent, BruttoPipe]
})
export class ProductModule { }
