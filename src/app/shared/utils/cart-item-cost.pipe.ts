import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../../model/pexel-response';

@Pipe({
  name: 'cartItemCost'
})
export class CartItemCostPipe implements PipeTransform {

  transform(photo: Photo): number {
    return photo.width > 3000 ? 2 : 1;
  }

}
