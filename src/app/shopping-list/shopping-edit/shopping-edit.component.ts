import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients-model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shopService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shopService.getIngredient(index);
        this.shoppingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const data = form.value;
    const newIngredient = new Ingredient(data.name, data.amount);
    if(this.editMode) {
      this.shopService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shopService.setIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDeleteItem() {
    this.shopService.deleteIngredient(this.editedItemIndex);
    this.onClearItem();
  }

  onClearItem() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
