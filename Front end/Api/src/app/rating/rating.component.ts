import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { ProductsServices } from '../products/products.services';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {

  rating:Number=0;
  moviedetails:any;
  constructor(private movie:MovieService,private router:Router,private pro:ProductsServices){}

  ngOnInit(): void {
    this.moviedetails=this.pro.ratingid;
  }
  RateNow(){
    this.moviedetails.rating=this.rating;
    console.log(this.moviedetails);
     this.movie.RateMovies(this.moviedetails.sno,this.moviedetails).subscribe((result)=>{
      
     });
     alert("Successfully rated this movie: "+ this.moviedetails.movieName);
     this.router.navigateByUrl("/movies");
  }
}
