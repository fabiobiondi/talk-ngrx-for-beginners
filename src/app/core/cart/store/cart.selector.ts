import { AppState } from '../../../app.module';
import { CartItem } from '../../../model/cart';
import { createSelector } from '@ngrx/store';

export const getCart = (state: AppState): CartItem[] => state.cart;
export const getCartIsEmpty = (state: AppState): boolean => !!state.cart.length;

export const getTotalCart = (state: AppState): number => {
  return state.cart.reduce((acc: number, item: CartItem) => {
    return acc + item.cost;
  }, 0);
};

export const getTotalCartFormatted = createSelector(
  getCart,
  getTotalCart,
  (cartItem: CartItem[], total: number) => {
    return `€ ${total} (${cartItem.length} products)`;
  }
);

