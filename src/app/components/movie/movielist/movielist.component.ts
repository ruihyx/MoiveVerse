import { Component, OnInit } from '@angular/core';
import {Movie, MovieService } from 'src/app/service/movie.service';
// import { Movie } from 'src/app/movie';
import { Subscription } from 'rxjs';  

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  movies: Movie[] = [];
  private movieSubscription!: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieSubscription = this.movieService.moviesSubject.subscribe(movies => {
      this.movies = movies;
    });

    this.movieService.getMovies();
  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }


}
