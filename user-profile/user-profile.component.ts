import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SignUpComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
