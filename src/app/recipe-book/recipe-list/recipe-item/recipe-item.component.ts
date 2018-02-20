import {Component, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe-model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('rcp') recipe: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


}
