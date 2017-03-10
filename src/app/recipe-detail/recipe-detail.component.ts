import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipeDetailInput: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
