import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { ProductsServices } from './products/products.services';
import { RatingComponent } from './rating/rating.component';
@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive,NavComponent,
    SignupComponent,LoginComponent,ProductsComponent,
    FormsModule,MoviedetailsComponent,HomeComponent,RatingComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{ 
  title :any;
  constructor(private pro:ProductsServices){}
  ngOnInit(): void {
    this.title=this.pro.particularmovie;
  }
 
  
}
