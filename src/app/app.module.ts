import { NgModule } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";

import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    ShoppingListEditComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, NgOptimizedImage],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
