import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.actions';
import { CartItemCostPipe } from '../../../shared/utils/cart-item-cost.pipe';
import { CartItem } from '../../../model/cart';

export const cartReducer = createReducer(
  [] as CartItem[],
  on(addToCart, (state, action) => {
    const found = state.some(item => item.item.id === action.item.id);
    // Avoid adding the same item
    if (!found) {
      const newItem = {
        item: action.item,
        cost: new CartItemCostPipe().transform(action.item)
      };
      return [...state, newItem];
    }
    return state;
  }),
  on(removeFromCart, (state, action) => state.filter(p => p.item.id !== action.item.id))
);
