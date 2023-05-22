import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './user.service';
import { Subject } from 'rxjs';


export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
 
  
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}
@Injectable({
  providedIn: 'root'
})



export class MovieService {
  
  moviesSubject = new Subject<Movie[]>();

private readonly BASE_URL = 'https://api.themoviedb.org/3';
private readonly tmdb_Key = localStorage.getItem('tmdb_Key');


  constructor(private http: HttpClient, private userService: UserService) { }

  getMovies(): void {
    console.log(this.tmdb_Key)
     const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.tmdb_Key}`;
    this.http.get<Movie[]>(apiUrl).pipe(
      map((response: any) => response.results)
    ).subscribe(movies => {
      this.moviesSubject.next(movies);
    });
    
  }

  getMovieDetails(movieId: number): Observable<Movie> {

    const apiUrl = `${this.BASE_URL}/movie/${movieId}?api_key=${this.tmdb_Key}`;
    return this.http.get<Movie>(apiUrl);
  }


  getMovie(movieId: number): Observable<Movie> {

    const apiUrl = `${this.BASE_URL}/movie/${movieId}?api_key=${this.tmdb_Key}`;
    return this.http.get<Movie>(apiUrl);
  }

  getMovieTrailers(id: number): Observable<any> {

    return this.http.get<any>(`${this.BASE_URL}/movie/${id}/videos?api_key=${this.tmdb_Key}`);
  }
}
