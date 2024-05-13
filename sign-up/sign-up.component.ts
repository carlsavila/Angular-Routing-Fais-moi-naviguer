import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyFormComponent } from '../my-form/my-form.component';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, RouterOutlet, UserProfileComponent, UserFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
