import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {


  public submitForm(form: NgForm){
    if(form.valid){
      console.log(form.value);
    }
  }

  public list: Array<{comida: string, preco: string}> = [
   {comida: "X-bacon", preco: "$20,00"},
   {comida: "X-salada", preco: "$15,00"},
   {comida: "Coxinha", preco: "$5,00"},
  ];
}
