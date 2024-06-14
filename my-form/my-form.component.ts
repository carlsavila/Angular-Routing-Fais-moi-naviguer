import { Component } from '@angular/core';
import { Order } from '../models/order.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  //Attributs
  newOrder: Order = {
    title: "",
    quantity: 0,
    date: new Date(),
    contact: ""
  }
  btnSubmitIsDisabled: boolean=true;

  //Functions
  btnOnSubmit(value: boolean){
    this.btnSubmitIsDisabled = !this.btnSubmitIsDisabled;
  }

  onSubmit(myForm: NgForm): void{
    // form submitted
    console.log(this.newOrder + "formulaire envoyé!");
    myForm.resetForm();
    
  }


}
