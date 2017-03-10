import { Component } from '@angular/core';
import { Recipe } from './shared/recipe';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedRecipe: Recipe;
}
