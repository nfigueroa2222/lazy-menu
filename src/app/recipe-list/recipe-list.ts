import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Data } from '@angular/router';
import recipesData from '../../assets/recipes.json';
import { RecipeComponent } from '../recipe/recipe';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, RecipeComponent],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
  category = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.category = data['category'];
      this.recipes = (recipesData as any[]).filter(r => r.category === this.category);
    });
  }
}
