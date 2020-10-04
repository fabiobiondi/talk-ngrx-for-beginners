import { AppState } from '../../../app.module';
import { CartItem } from '../../../model/cart';
import { createSelector } from '@ngrx/store';

// cart item list
export const getCart = (state: AppState): CartItem[] => state.cart;

// is cart empty?
export const getCartIsEmpty = (state: AppState): boolean => !!state.cart.length;

// cart total cost
export const getTotalCart = (state: AppState): number => {
  return state.cart.reduce((acc: number, item: CartItem) => {
    return acc + item.cost;
  }, 0);
};

// cart total formatted as a string
export const getTotalCartFormatted = createSelector(
  getCart,
  getTotalCart,
  (cartItem: CartItem[], total: number) => {
    return `€ ${total} (${cartItem.length} products)`;
  }
);

