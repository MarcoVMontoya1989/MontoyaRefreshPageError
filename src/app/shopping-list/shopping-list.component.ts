import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private shoppingservices: ShoppingService) { }

  ngOnInit() {
    this.items = this.shoppingservices.getItems();
  }
}
