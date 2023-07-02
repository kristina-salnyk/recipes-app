import {
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent {
  @ViewChild("nameInput", { static: true }) nameInput: ElementRef =
    new ElementRef(null);
  @ViewChild("amountInput", { static: true }) amountInput: ElementRef =
    new ElementRef(null);

  constructor(private shoppingListService: ShoppingListService) {
  }

  onFormSubmit(event: Event) {
    event.preventDefault();

    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }
}
