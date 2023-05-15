import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Movie, MovieService } from './service/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MoviedetailResolver implements Resolve<Movie> {
  constructor(private movieService: MovieService){}


  resolve(route: ActivatedRouteSnapshot): Observable<Movie> {
    const id = route.paramMap.get('id');
    if (id !== null) {
      const movieId = Number(id);
      console.log('reslove success')
      return this.movieService.getMovieDetails(movieId);
    } else {
      throw new Error('Movie id is null');
    }
  }
}
