import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, ViewWillEnter {
  
  recipes: Recipe[] = []

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }
  ionViewWillEnter(): void {
      
    this.recipes = this.recipesService.getAllRecipes()
  }

}
