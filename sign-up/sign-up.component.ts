import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, RouterOutlet, UserProfileComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
