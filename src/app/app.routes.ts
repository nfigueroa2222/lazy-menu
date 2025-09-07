import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu';
import { RecipeListComponent } from './recipe-list/recipe-list'

export const routes: Routes = [
    //{ path: '', redirectTo: 'menu', pathMatch: 'full' }, // root redirect to astro component
    { path: 'breakfast', component: RecipeListComponent, data: { category: 'breakfast' } },
    { path: 'lunch', component: RecipeListComponent, data: { category: 'lunch' } },
    { path: 'dinner', component: RecipeListComponent, data: { category: 'dinner' } },
    { path: 'snacks', component: RecipeListComponent, data: { category: 'snacks' } }
];
