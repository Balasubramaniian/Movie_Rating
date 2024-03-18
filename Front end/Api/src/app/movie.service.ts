import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import { Signup } from './signup.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  private api="http://localhost:8080/movies";

  constructor(private Http: HttpClient) { }
  getMovie():Observable<Movie[]>{
   return this.Http.get<Movie[]>(this.api);
  }
  getMoviedetails(movie:Movie):Observable<Movie[]>{
    return this.Http.get<Movie[]>(this.api+'/'+movie.sno);
  }

  createUser(user:Signup):Observable<Signup>{
    return this.Http.post<Signup>(this.api+'/signup',user);
  }
  getUser():Observable<Signup[]>{
    return this.Http.get<Signup[]>(this.api+'/login');
  }
  RateMovies(sno:any,movie:Movie):Observable<Movie>{
    return this.Http.put<Movie>(this.api+'/rating/'+sno,movie);
  }
}
