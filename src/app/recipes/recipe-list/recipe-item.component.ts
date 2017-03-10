import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
