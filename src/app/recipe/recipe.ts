import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css'
})
export class RecipeComponent {
    @Input() recipe: any;

    constructor(private cartService: CartService) {}

    addToCart() {
      this.cartService.addIngredients(this.recipe.ingredients);
    }
}
