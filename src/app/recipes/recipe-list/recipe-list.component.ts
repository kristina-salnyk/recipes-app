import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test recipe description',
      'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'Test recipe description',
      'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg'
    ),
  ];
}
