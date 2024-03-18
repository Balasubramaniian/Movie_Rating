import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { ProductsServices } from './products.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  movies:Movie[]=[];
  particularmovie:any;
  id:number=0;
  ngOnInit(): void {
    this.getAlldata();
  }
  
  constructor(private router:Router,
    private movieservies:MovieService,
    private pro:ProductsServices){
      
  }
  getAlldata(){
    this.movieservies.getMovie().subscribe((movie)=>{
      this.movies=movie;
    })
   }
   getMoviedetails(movie:Movie){
    this.movieservies.getMoviedetails(movie).subscribe((result)=>{
      this.pro.getdata(result); 
      this.router.navigateByUrl("/details");
    });
   }
}
