import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.module';
import { getTotalCartFormatted } from '../cart/store/cart.selector';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" routerLink="shop">My NGRX Cart</a>
      <div>
        <span
          class="badge badge-pill badge-info"
          routerLink="cart"
          style="cursor: pointer"
        >
         {{getTotalCartFormatted$ | async}} 
        </span>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  getTotalCartFormatted$: Observable<string> = this.store.pipe(select(getTotalCartFormatted));

  constructor(private store: Store<AppState>) { }

}
