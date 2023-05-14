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
  // private readonly API_KEY = 'your-tmdb-api-key';
  moviesSubject = new Subject<Movie[]>();

private readonly API_KEY = "acf5e249ff0bb70af5fd761e0135b2e8";
// private readonly API_KEY = this.userService.tmdbApiKey;
private readonly BASE_URL = 'https://api.themoviedb.org/3';



  constructor(private http: HttpClient, private userService: UserService) { }

  getMovies(): void {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=acf5e249ff0bb70af5fd761e0135b2e8`;
    //  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.userService.tmdbApiKey}`;
    this.http.get<Movie[]>(apiUrl).pipe(
      map((response: any) => response.results)
    ).subscribe(movies => {
      this.moviesSubject.next(movies);
    });
    
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    const apiUrl = `${this.BASE_URL}/movie/${movieId}?api_key=${this.API_KEY}`;
    return this.http.get<Movie>(apiUrl);
  }

  getMovieVideos(movieId: number): Observable<Video[]> {
    const apiUrl = `${this.BASE_URL}/movie/${movieId}/videos?api_key=${this.API_KEY}`;
    return this.http.get<Video[]>(apiUrl).pipe(
      map((response: any) => response.results)
    );
  }
}
