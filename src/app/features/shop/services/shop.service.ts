import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PexelResponse } from '../../../model/pexel-response';

@Injectable({ providedIn: 'root'})
export class ShopService {
  response: PexelResponse;
  text = 'Various';

  constructor(private http: HttpClient) { }

  searchImage(text: string): void {
    this.text = text;
    this.http.get<PexelResponse>(
      'https://api.pexels.com/v1/search?per_page=10&query=' + text,
      { headers: { Authorization: '563492ad6f9170000100000189ac030285b04e35864a33b95c2838be' } }
    )
      .subscribe(res => this.response = res);
  }

}
