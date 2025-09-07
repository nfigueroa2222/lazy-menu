import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu';
import { CartComponent } from './cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CartComponent],
  template: `
    <app-menu></app-menu> <!-- header appears on all pages -->
    <router-outlet></router-outlet>
    <app-cart></app-cart> <!-- floating cart -->
  `
})
export class AppComponent {}