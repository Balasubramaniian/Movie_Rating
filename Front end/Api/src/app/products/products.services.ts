import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices implements OnInit{
  
    particularmovie:Movie[]=[];
    ratingid:any;
    constructor(){
    }
    ngOnInit(): void {
      console.log(this.particularmovie);
    }
    getdata(name:any){
      this.particularmovie = name;
    }
      
    RatingId(id:any){
      this.ratingid=id;
    }
}

