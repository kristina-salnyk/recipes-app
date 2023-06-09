import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 1),
    new Ingredient('Cheese', 200),
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
