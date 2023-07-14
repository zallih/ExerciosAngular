import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'exercicios';
}
