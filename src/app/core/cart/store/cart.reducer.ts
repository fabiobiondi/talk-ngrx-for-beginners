import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.actions';
import { CartItemCostPipe } from '../../../shared/utils/cart-item-cost.pipe';
import { CartItem } from '../../../model/cart';

export const cartReducer = createReducer(
  [] as CartItem[],
  on(addToCart, (state, action) => {
    const found = state.some(item => item.item.id === action.item.id);
    // Add to Cart
    if (!found) {
      // Avoid adding the same item
      return [...state, {
        item: action.item,
        cost: new CartItemCostPipe().transform(action.item)
      }];
    }
    return state;
  }),
  on(removeFromCart, (state, action) => {
    return state.filter(p => p.item.id !== action.item.id);
  })
);
