import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ProductsServices } from '../products/products.services';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {
 
  moviedata:any;
  allmovies:any
  
  constructor(private products:ProductsServices,
    private router:Router,private movie:MovieService) {}

  ngOnInit(): void {
   this.moviedata=this.products.particularmovie;
   this.movie.getMovie().subscribe((result)=>{
    this.allmovies=result;
   });
  }
  
  rating(moviedetails:any){
     this.products.RatingId(moviedetails);
     this.router.navigateByUrl("/rating");
  }
   
}
