import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
    <h1 style="text-align: center; color: purple;">Exercicios Angular</h1>
    <h2 style="color: purple;">Fake Server</h2>
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
    <br><br><hr>
    <h2 style="color: purple;">Formularios</h2>
    <app-forms></app-forms>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'exercicios';
}
