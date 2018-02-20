import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredients-model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingService {

  changedIngredients = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('pepper', 10),
    new Ingredient('tomatoes', 15),
    new Ingredient('onions', 5)
  ];

  constructor() { }

  setIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.changedIngredients.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.changedIngredients.next(this.ingredients.slice());
  }
}
