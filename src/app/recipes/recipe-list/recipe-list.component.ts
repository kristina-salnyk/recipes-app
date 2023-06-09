import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectRecipeEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test recipe description',
      'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'Test recipe description',
      'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg'
    ),
  ];

  ngOnInit() {
    // if (this.recipes.length > 0) this.onRecipeSelect(this.recipes[0]);
  }

  onRecipeSelect(recipe: Recipe) {
    this.selectRecipeEvent.emit(recipe);
  }
}
