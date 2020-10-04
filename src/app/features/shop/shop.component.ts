import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShopState } from './shop.module';
import { Photo } from '../../model/pexel-response';
import { getSearchResult, getShopSearchText } from './store/search.selectors';
import { search } from './store/search.actions';
import { addToCart } from '../../core/cart/store/cart.actions';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  template: `
    <!--Form: search photos-->
    <form #f="ngForm" (ngSubmit)="searchHandler(f.value.searchText)">
      <div class="form-row align-items-center">
        <div class="col-auto">
          <input type="text" class="form-control mb-2" 
                 placeholder="Search Products" 
                 [ngModel]="getShopSearchText$ | async"
                 name="searchText"
          >
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-2">Search</button>
        </div>
      </div>
    </form>

    <!--List: Photo result-->
    <div class="d-flex flex-wrap">
        <div 
          class="p-2 bd-highlight card" style="width: 18rem;" 
          *ngFor="let photo of items$ | async"
        >
          <img [src]="photo.src.landscape" class="card-img-top" [alt]="'Photo by ' + photo.photographer">
          <div class="card-body">
            <h5 class="card-title">
              {{photo.width}} x {{photo.height}}
            </h5>
            <p class="card-text">Photo by <br/> <a [href]="photo.photographer_url">{{photo.photographer}}</a></p>
            <button class="btn btn-primary btn-block" (click)="addToCartHandler(photo)">
              Add to Cart
              (€ {{photo | cartItemCost}})
            </button>
          </div>
        </div>
    </div>
  `,
})
export class ShopComponent implements OnInit {
  items$: Observable<Photo[]> = this.store.pipe(select(getSearchResult));
  getShopSearchText$: Observable<string> = this.store.pipe(select(getShopSearchText));

  constructor(
    public store: Store<ShopState>
  ) { }

  ngOnInit(): void {
    this.getShopSearchText$
      .pipe(first())
      .subscribe(previousResearch => {
      if (previousResearch) {
        this.store.dispatch(search({ text: previousResearch }));
      }
    });
  }

  addToCartHandler(item: Photo): void {
    this.store.dispatch(addToCart({  item }));
  }

  searchHandler(text: string): void {
    this.store.dispatch(search({ text }));
  }
}

