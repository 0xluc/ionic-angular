import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        return
      }
      const recipeId = paramMap.get('recipeId')
      this.loadedRecipe = this.recipesService.getRecipe(recipeId!) as Recipe
    })
  }

  async onDeleteRecipe(){
    const alerta = await this.alertCtrl.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id)
            this.router.navigate(['/recipes'])
          },
        },
      ],
    });

    await alerta.present();

  }
}
