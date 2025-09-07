import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  // Use getter to safely access service after injection
  get cart$() {
    return this.cartService.cart$;
  }

  constructor(private cartService: CartService) {}

  clearCart() {
    this.cartService.clearCart();
  }

  removeItem(item: string) {
    this.cartService.removeIngredient(item);
  }
}
