import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentRecipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }
}