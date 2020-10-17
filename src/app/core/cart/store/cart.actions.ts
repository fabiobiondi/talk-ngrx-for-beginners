import { createAction, props } from '@ngrx/store';
import { Photo } from '../../../model/pexel-response';

export const addToCart = createAction(
  '[cart] add',
  props<{ item: Photo}>()
);

export const removeFromCart = createAction(
  '[cart] remove',
  props<{ item: Photo}>()
);

