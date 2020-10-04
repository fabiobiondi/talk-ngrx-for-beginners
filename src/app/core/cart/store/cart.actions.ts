import { createAction, props } from '@ngrx/store';
import { Photo } from '../../../model/pexel-response';
import { CartItem } from '../../../model/cart';

export const addToCart = createAction(
  '[cart] add',
  props<{ item: Photo}>()
);

export const removeFromCart = createAction(
  '[cart] remove',
  props<{ item: Photo}>()
);

