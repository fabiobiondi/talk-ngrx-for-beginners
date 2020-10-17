import { createReducer, on } from '@ngrx/store';
import { Photo } from '../../../model/pexel-response';
import { search, searchSuccess } from './search.actions';

export interface SearchState {
  items: Photo[];
  text: string;
}

export const INITIALIZE_STATE: SearchState = {
  items: [],
  text: 'nature'
};

export const searchReducer = createReducer(
  INITIALIZE_STATE,
  on(search, (state, action) =>  ({ ...state, text: action.text, })),
  on(searchSuccess, (state, action) => ({ ...state, items: [...action.response.photos] }))
);
