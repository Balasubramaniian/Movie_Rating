import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private movieservies:MovieService){}
  movies:Movie[]=[];

  ngOnInit(): void {
    this.getAlldata();
  }

  getAlldata(){
    this.movieservies.getMovie().subscribe((movie)=>{
      this.movies=movie;
    })
   }
}
