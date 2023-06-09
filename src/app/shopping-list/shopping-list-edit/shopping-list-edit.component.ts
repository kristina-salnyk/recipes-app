import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @Output() addIngredientEvent = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef =
    new ElementRef(null);
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef =
    new ElementRef(null);

  onFormSubmit(event: Event) {
    event.preventDefault();

    this.addIngredientEvent.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }
}
