import { Component } from '@angular/core';
import { Order } from '../models/order.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  newOrder: Order = {
    title: "",
    quantity: 0,
    date: new Date(),
    contact: ""
  }
  
  onSubmit(): void{
    // form submitted
    console.log(this.newOrder + "formulaire envoyé!");
  }
}
