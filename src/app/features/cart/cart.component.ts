import { Component } from '@angular/core';
import { CartService } from '../../core/cart/cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <!--No items in cart-->
    <div class="alert alert-info" *ngIf="!cartService.items.length">
      <div class="mb-3">There are no items in cart!</div>
      <button class="btn btn-outline-primary" routerLink="shop">Go to shop</button>
    </div>
  
    <!--Cart List-->
    <div 
      class="media pt-5"
      *ngFor="let cartItem of cartService.items"
    >
      <img [src]="cartItem.item.src.tiny" class="mr-3" alt="item">
      <div class="media-body">
        <h2 class="mt-0">{{cartItem.item.width}} x {{cartItem.item.height}}</h2>
        € {{cartItem.item | cartItemCost}}
        <button class="btn btn-primary" (click)="cartService.removeFromCart(cartItem.item)">Remove</button>
      </div>
    </div>
  `,
})
export class CartComponent {

  constructor(public cartService: CartService) { }

}
