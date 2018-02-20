///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredients-model';
import {ShoppingService} from './shopping.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients();
    this.subscription = this.shopService.changedIngredients.subscribe(
      (ing: Ingredient[]) => {
        this.ingredients = this.ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
