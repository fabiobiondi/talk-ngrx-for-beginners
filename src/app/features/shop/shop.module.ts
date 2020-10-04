import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { searchReducer, SearchState } from './store/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './store/search.effects';

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
