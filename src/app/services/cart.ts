import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cart: { [ingredient: string]: number } = {};
  private cartSubject = new BehaviorSubject<{ [ingredient: string]: number }>({});

  cart$ = this.cartSubject.asObservable();

  addIngredient(ingredient: string) {
    this.cart[ingredient] = (this.cart[ingredient] || 0) + 1;
    this.cartSubject.next({ ...this.cart });
  }

  addIngredients(ingredients: string[]) {
    ingredients.forEach(i => this.addIngredient(i));
  }

  removeIngredient(ingredient: string) {
    if (this.cart[ingredient]) {
      this.cart[ingredient]--;
      if (this.cart[ingredient] === 0) delete this.cart[ingredient];
      this.cartSubject.next({ ...this.cart });
    }
  }

  clearCart() {
    this.cart = {};
    this.cartSubject.next({ ...this.cart });
  }

  getCart() {
    return this.cart;
  }
}
