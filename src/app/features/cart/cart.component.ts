import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../app.module';
import { CartItem } from '../../model/cart';
import { select, Store } from '@ngrx/store';
import { getCart, getCartIsEmpty, getTotalCart } from '../../core/cart/store/cart.selector';
import { removeFromCart } from '../../core/cart/store/cart.actions';

@Component({
  selector: 'app-cart',
  template: `
    <div class="list-group-item" *ngIf="(getCartIsEmpty$ | async) else empty">
      Total order: € {{getTotalCart | async}}
    </div>
    
    <!--No items in cart-->
    <ng-template #empty>
      <div class="alert alert-info">
        <div class="mb-3">There are no items in cart!</div>
        <button class="btn btn-outline-primary" routerLink="shop">Go to shop</button>
      </div>
    </ng-template>
  
    <!--Cart List-->
    <div 
      class="media pt-5"
      *ngFor="let cartItem of cart$ | async"
    >
      <img [src]="cartItem.item.src.tiny" class="mr-3" alt="item">
      <div class="media-body">
        <h2 class="mt-0">{{cartItem.item.width}} x {{cartItem.item.height}}</h2>
        € {{cartItem.item | cartItemCost}}
        <button class="btn btn-primary" (click)="removeFromCartHandler(cartItem)">Remove</button>
      </div>
    </div>
  `,
})
export class CartComponent {
  cart$: Observable<CartItem[]> = this.store.pipe(select(getCart));
  getTotalCart: Observable<number> = this.store.pipe(select(getTotalCart));
  getCartIsEmpty$: Observable<boolean> = this.store.pipe(select(getCartIsEmpty));

  // constructor(public cartService: CartService) { }
  constructor(private store: Store<AppState>) { }

  removeFromCartHandler(cartItem: CartItem): void {
    // this.cartService.removeFromCart(cartItem.item)
    this.store.dispatch(removeFromCart({ item: cartItem.item }))
  }
}
