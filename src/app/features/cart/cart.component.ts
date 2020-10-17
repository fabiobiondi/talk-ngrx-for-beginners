import { Component } from '@angular/core';
import { CartService } from '../../core/cart/cart.service';
import { CartItem } from '../../model/cart';

@Component({
  selector: 'app-cart',
  template: `
    <!-- No items message-->
    <div *ngIf="!cartService.items.length else totalOrder">
      <div class="alert alert-warning">
        <div class="mb-3">There are no items in cart!</div>
        <button class="btn btn-outline-primary" routerLink="shop">Go to shop</button>
      </div>
    </div>

    <!--No items in cart-->
    <ng-template #totalOrder>
      <div class="alert alert-info">
        Total order: € {{cartService.getTotalCart()}}
      </div>
    </ng-template>
    
    <!--Cart List-->
    <div 
      class="media pt-2"
      *ngFor="let cartItem of cartService.items"
    >
      <img [src]="cartItem.item.src.tiny" class="mr-3" alt="item">
      <div class="media-body">
        <h4 class="mt-0">{{cartItem.item.width}} x {{cartItem.item.height}}</h4>
        € {{cartItem.item | cartItemCost}}
        <button class="btn btn-primary" (click)="removeFromCartHandler(cartItem)">Remove</button>
      </div>
    </div>
  `,
})
export class CartComponent {

  constructor(public cartService: CartService) { }

  removeFromCartHandler(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.item);
  }

}
