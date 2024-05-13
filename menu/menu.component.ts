import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink ,SignUpComponent, UserProfileComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
