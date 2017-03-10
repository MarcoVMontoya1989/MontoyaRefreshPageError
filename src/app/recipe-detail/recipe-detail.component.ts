import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { ShoppingService } from '../services/shopping.service';
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  providers: [ShoppingService]
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipeDetailInput: Recipe;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  onAddToShoppingList() {
    this.shoppingService.addItems(this.selectedRecipeDetailInput.ingredients);
  }

}
