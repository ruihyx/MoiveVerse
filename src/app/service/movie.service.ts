import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';


export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  popularity: number;
  // homepage: string;
 
  
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
  
  moviesSubject = new BehaviorSubject<Movie[]>([]);

private readonly BASE_URL = 'https://api.themoviedb.org/3';



  constructor(private http: HttpClient, private authService: AuthService) { }

  gettmdb_key():any{
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken){
      const {tmdb_key} = this.authService.getUserData(accessToken)
      return tmdb_key
    }
  }

  // getMovies(): void {
  //   const tmdb_Key = this.gettmdb_key()
  //   console.log(tmdb_Key)
  //    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_Key}`;
  //   this.http.get<Movie[]>(apiUrl).pipe(
  //     map((response: any) => response.results)
  //   ).subscribe(movies => {
  //     this.moviesSubject.next(movies);
  //   });
    
  // }
  getMovies(page: number = 1): void {
    const tmdb_Key = this.gettmdb_key()
    console.log(tmdb_Key)
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_Key}&page=${page}`;
    this.http.get<Movie[]>(apiUrl).pipe(
      map((response: any) => response.results)
    ).subscribe(movies => {
      // append new movies to the current movies
      const currentMovies = this.moviesSubject.getValue();
      this.moviesSubject.next([...currentMovies, ...movies]);
    });
    
  }




  getMovieDetails(movieId: number): Observable<Movie> {
    const tmdb_Key = this.gettmdb_key()

    const apiUrl = `${this.BASE_URL}/movie/${movieId}?api_key=${tmdb_Key}`;
    
    return this.http.get<Movie>(apiUrl);
  }


  getMovieCredits(movieId: number): Observable<any> {
    const tmdb_Key = this.gettmdb_key()
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.gettmdb_key()}`;
    return this.http.get<any>(apiUrl);
  }
  
  getMovieImages(movieId: number): Observable<any> {
    const tmdb_Key = this.gettmdb_key()
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${this.gettmdb_key()}`;
    return this.http.get<any>(apiUrl);
  }

  getMovieTrailers(id: number): Observable<any> {

    const tmdb_Key = this.gettmdb_key()
   
    return this.http.get<any>(`${this.BASE_URL}/movie/${id}/videos?api_key=${tmdb_Key}`);
  }
}

