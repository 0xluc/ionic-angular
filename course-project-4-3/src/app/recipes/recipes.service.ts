import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Cake',
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/06/14/35/44/1000_F_614354425_jYYnQYYAdQiU8feKUiLERM1zUZbkxSmw.webp',
      ingredients: ['sugar', 'eggs', 'butter']
    }
  ]
  constructor() { }
  getAllRecipes(){
    return [...this.recipes]
  }
  getRecipe(recipeId: string){
    return {
      
      ...this.recipes.find(recipe =>{
        return recipe.id == recipeId
      })
    }
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe=>{
      return recipe.id !== recipeId
    })
  }
}
