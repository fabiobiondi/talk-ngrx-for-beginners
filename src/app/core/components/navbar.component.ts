import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-light bg-light sticky-top">
      <a class="navbar-brand" routerLink="shop">My NGRX Cart</a>
      <div>
        <span
          class="badge badge-pill badge-info"
          routerLink="cart"
          style="cursor: pointer"
        >
          € {{cartService.getTotalCart()}} ({{cartService.items.length}} products)
        </span>
      </div>
    </nav>
  `,
})
export class NavbarComponent {

  constructor(public cartService: CartService) { }

}
