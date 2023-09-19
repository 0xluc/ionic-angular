import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Hello'

  constructor() {}

  onChangeText() {
    if(this.text === 'Hello') {
      this.text = 'World'
    } else {
      this.text = 'Hello'
    }
  }
}
