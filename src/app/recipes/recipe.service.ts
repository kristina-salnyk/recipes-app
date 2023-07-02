import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test recipe description',
      'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg',
      [new Ingredient('Milk', 2), new Ingredient('Salmon', 5)]
    ),
    new Recipe(
      'Test Recipe 2',
      'Test recipe description',
      'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg',
      [new Ingredient('Salad', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
