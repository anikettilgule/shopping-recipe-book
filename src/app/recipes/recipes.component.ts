import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipeData !: Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  onSelectedRecipe(recipeData: Recipe){
    this.selectedRecipeData = recipeData;
  }
}
