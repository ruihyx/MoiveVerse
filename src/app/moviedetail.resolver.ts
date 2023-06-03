import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, finalize, forkJoin, of } from 'rxjs';
import { Movie, MovieService } from './service/movie.service';

@Injectable({
  providedIn: 'root'
})
// export class MoviedetailResolver implements Resolve<Movie> {
  
//   constructor(private movieService: MovieService){}


//   resolve(route: ActivatedRouteSnapshot): Observable<Movie> {
//     const id = route.paramMap.get('id');
//     if (id !== null) {
//       const movieId = Number(id);
//       console.log('reslove success')
//       return this.movieService.getMovieDetails(movieId)
//     } else {
//       throw new Error('Movie id is null');
//     }
//   }
// }
export class MoviedetailResolver implements Resolve<any> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const movieId = +route.paramMap.get('id')!;
    return forkJoin({
      movie: this.movieService.getMovieDetails(movieId).pipe(catchError((err) => {
        console.error(err);
        return of({} as Movie);
      })),
      credits: this.movieService.getMovieCredits(movieId).pipe(catchError((err) => {
        console.error(err);
        return of([]);
      })),
      images: this.movieService.getMovieImages(movieId).pipe(catchError((err) => {
        console.error(err);
        return of([]);
      })),
      trailers: this.movieService.getMovieTrailers(movieId).pipe(catchError((err) => {
        console.error(err);
        return of([]);
      })),
    });
  }
}
