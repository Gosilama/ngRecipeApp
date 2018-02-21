import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredients-model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingService {

  changedIngredients = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.changedIngredients.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.changedIngredients.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.changedIngredients.next(this.ingredients.slice());
  }
}
