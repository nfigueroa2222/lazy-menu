import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, TitleCasePipe, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
    categories = ['breakfast', 'lunch', 'dinner', 'snacks'];
}
