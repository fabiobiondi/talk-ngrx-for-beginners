import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ShopComponent } from './shop.component';
import { SearchEffects } from './store/search.effects';
import { searchReducer, SearchState } from './store/search.reducer';

export interface ShopState {
  search: SearchState;
}

const reducers: ActionReducerMap<ShopState> = {
  search: searchReducer,
};

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('shop', reducers),
    EffectsModule.forFeature([ SearchEffects ])
  ]
})
export class ShopModule { }
