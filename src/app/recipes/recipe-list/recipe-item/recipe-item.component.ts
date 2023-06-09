import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe = { name: '', description: '', imagePath: '' };
  @Output() selectRecipeEvent = new EventEmitter<void>();

  onRecipeClick() {
    this.selectRecipeEvent.emit();
  }
}
