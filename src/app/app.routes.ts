import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'contact-us',component:ContactUsComponent}
];

