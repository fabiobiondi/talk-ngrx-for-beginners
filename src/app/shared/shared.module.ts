import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemCostPipe } from './utils/cart-item-cost.pipe';



@NgModule({
  declarations: [
    CartItemCostPipe
  ],
  exports: [
    CartItemCostPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
