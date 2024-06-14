import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { MyFormComponent } from './my-form/my-form.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserProfileComponent },
    { path: 'myform', component: MyFormComponent},
    { path: '**', component: UserProfileComponent},
];
