import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[] = [
  new Recipe('Chicken Lollypop', 'Lollypop dipped in oyester sauce','https://www.ndtv.com/cooks/images/chicken%20lollipop%20new.jpg')
]
  constructor() { }

  ngOnInit() {
  }

}
