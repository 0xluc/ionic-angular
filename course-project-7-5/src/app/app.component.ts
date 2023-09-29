import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private plataform: Platform, private router:Router) {}

  initializerApp(){
    this.plataform.ready().then(() => {
      
    })
  }
  onLogout(){
    this.authService.logout()
    this.router.navigateByUrl('/auth')
  }
}
