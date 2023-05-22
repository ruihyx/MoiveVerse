import { Component, OnInit } from '@angular/core';
import {Movie, MovieService } from 'src/app/service/movie.service';
// import { Movie } from 'src/app/movie';
import { filter, Subscription } from 'rxjs';  
import { ScrollpositionService } from 'src/app/service/scrollposition.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  movies: Movie[] = [];
  private movieSubscription!: Subscription;
  private navigationSubscription!: Subscription;

  constructor(private movieService: MovieService, private scrollPositionService: ScrollpositionService, private router: Router) {
   
   }

  ngOnInit(): void {
    this.movieSubscription = this.movieService.moviesSubject.subscribe(movies => {
      this.movies = movies;

    });

    this.movieService.getMovies();

  
    // window.scrollTo(this.scrollPositionService.scrollPosition[0],this.scrollPositionService.scrollPosition[1])
  }

  ngOnDestroy(): void {
    
    this.movieSubscription.unsubscribe();
   
    //save position
    // this.scrollPositionService.scrollPosition = [window.scrollX, window.scrollY]
  }


}
