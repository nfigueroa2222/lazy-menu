import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  collapsed = true;

  constructor(public cartService: CartService) {}

  toggleCart() {
    this.collapsed = !this.collapsed;
  }

  removeItem(item: string) {
    this.cartService.removeIngredient(item);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  // Use getter to safely access service after injection
  get cart$() {
    return this.cartService.cart$;
  }

  get cartCount(): number {
    const items = this.cartService.getCart();
    return Object.values(items).reduce((sum, qty) => sum + qty, 0);
  }
}
