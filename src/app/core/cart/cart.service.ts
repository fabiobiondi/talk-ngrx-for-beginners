import { Photo } from '../../model/pexel-response';
import { CartItem } from '../../model/cart';
import { Injectable } from '@angular/core';
import { CartItemCostPipe } from '../../shared/utils/cart-item-cost.pipe';

@Injectable({ providedIn: 'root'})
export class CartService {
  items: CartItem[] = [];

  addToCart(photo: Photo): void {
    // Avoid adding the same item
    const found = this.items.some(item => item.item.id === photo.id);
    // Add to Cart
    if (!found) {
      this.items.push({
        item: photo,
        cost: new CartItemCostPipe().transform(photo)
      });
    }
  }

  removeFromCart(photo): void {
    const index = this.items.findIndex(p => p.item.id === photo.id);
    this.items.splice(index, 1);
  }

  getTotalCart(): number {
    return this.items.reduce((acc: number, item: CartItem) => {
      return acc + item.cost;
    }, 0);
  }
}
