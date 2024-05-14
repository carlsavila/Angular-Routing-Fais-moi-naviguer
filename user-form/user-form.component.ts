import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  newUser: User = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  }

  onSubmit(): void {
    console.log('Nouvel utilisateur : email : ' + this.newUser.email +", nom : "+ this.newUser.lastname +", prénom : "+ this.newUser.firstname +", mot de passe : "+ this.newUser.password );
  }

}
