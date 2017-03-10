import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', 
    [new Ingredient('HumanBody', 12), new Ingredient('Metal Tube', 12)]),

    new Recipe('Dummy2', 'Dummy2', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', 
    [new Ingredient('PlasticModel', 12), new Ingredient('Plastic Tube', 12)]),

    new Recipe('Dummy3', 'Dummy3', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', 
    [new Ingredient('IronHuman', 12), new Ingredient('Iron Tube', 12)])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
