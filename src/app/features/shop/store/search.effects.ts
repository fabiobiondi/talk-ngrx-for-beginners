import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { search, searchFailed, searchSuccess } from './search.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { PexelResponse } from '../../../model/pexel-response';
import { of } from 'rxjs';

@Injectable()
export class SearchEffects {
  doSearch = createEffect(() => this.actions$.pipe(
    ofType(search),
    switchMap((action) => {
      return this.http.get<PexelResponse>(
        'https://api.pexels.com/v1/search?per_page=10&query=' + action.text,
        { headers: { Authorization: '563492ad6f9170000100000189ac030285b04e35864a33b95c2838be' } }
      )
        .pipe(
          map(response => searchSuccess({ response })),
          catchError(() => of(searchFailed()))
        );
    })
  ));

  constructor(private actions$: Actions, private http: HttpClient) {}
}
