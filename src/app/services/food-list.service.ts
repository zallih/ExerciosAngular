import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X Bacon",
    "Salda",
    "Batata",
    "Chocolate",

  ];

  public foodList() {
    return this.list;
  }

  constructor() { }
}
