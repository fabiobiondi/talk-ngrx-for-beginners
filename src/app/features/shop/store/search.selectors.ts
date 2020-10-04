import { ShopState } from '../shop.module';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getShopState = createFeatureSelector<ShopState>('shop');
export const getSearchResult = createSelector(
  getShopState,
  state => state.search.items
);
