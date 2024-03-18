import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'Login', component:LoginComponent},
    {path: 'signup', component:SignupComponent},
    {path:'movies', component:ProductsComponent},
    {path:'details',component:MoviedetailsComponent},
    {path:'rating',component:RatingComponent},
    {path: '**',component: ErrorComponent}
]; 
