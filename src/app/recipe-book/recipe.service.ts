import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe-model';
import {Ingredient} from '../shared/ingredients-model';
import {ShoppingService} from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {

  private _recipes: Recipe[] = [
    new Recipe(
      'Jollof Rice',
      'something Nigeria loves',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Ginger', 12),
        new Ingredient('Garlic', 5)
      ]),
    new Recipe(
      'Fried Rice',
      'another thing Nigeria loves',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Carrots', 20),
        new Ingredient('Spring onions', 20)
      ]),
    new Recipe(
      'Coconut Rice',
      'Nigeria really likes rice',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Coconut', 30),
        new Ingredient('Ugwu', 15)
      ])
  ];

  constructor(private shopService: ShoppingService) { }


  getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  getRecipe(index: number) {
    return this._recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shopService.setIngredients(ingredients);
  }
}
