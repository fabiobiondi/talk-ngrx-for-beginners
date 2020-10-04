import { createAction, props } from '@ngrx/store';
import { PexelResponse } from '../../../model/pexel-response';

export const search = createAction(
  '[shop/search] search',
  props<{ text: string }>()
);

export const searchSuccess = createAction(
  '[shop/search] search success',
  props<{ response: PexelResponse }>()
);

export const searchFailed = createAction(
  '[shop/search] search failed'
);
