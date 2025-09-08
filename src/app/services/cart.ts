import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'lazyMenuCart';

  private cart: { [ingredient: string]: number } = {};

  // load cart from localStorage or start with empty object
  private cartSubject = new BehaviorSubject<{ [ingredient: string]: number }>(
    this.loadCart()
  );

  cart$ = this.cartSubject.asObservable();

  private loadCart(): { [key: string]: number } {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : {};
  }

  private saveCart(cart: { [key: string]: number }) {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  addIngredient(ingredient: string) {
    const current = { ...this.cartSubject.value };
    current[ingredient] = (current[ingredient] || 0) + 1;
    this.cartSubject.next(current);
    this.saveCart(current);
  }

  removeIngredient(ingredient: string) {
    const current = { ...this.cartSubject.value };
    if (current[ingredient]) {
      delete current[ingredient];
      this.cartSubject.next(current);
      this.saveCart(current);
    }
  }

  clearCart() {
    const empty = {};
    this.cartSubject.next(empty);
    this.saveCart(empty);
  }

  getCart() {
    return this.cartSubject.value;
  }
}
