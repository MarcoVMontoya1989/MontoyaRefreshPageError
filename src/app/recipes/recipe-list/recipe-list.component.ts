import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  providers: [RecipeService]
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  // Correcto
  // recipeList = new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');

  // to send the recipe to recipe-detail component in @Input selectedRecipe: Recipe
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private services: RecipeService) { }

  ngOnInit() {
    this.recipes = this.services.getRecipes();
  }

  OnSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  

}
