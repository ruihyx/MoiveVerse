import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {Movie, MovieService } from 'src/app/service/movie.service';
// import { Movie } from 'src/app/movie';
import { filter, Subscription } from 'rxjs';  
import { ScrollpositionService } from 'src/app/service/scrollposition.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  [x: string]: any;
  movies: Movie[] = [];
  private movieSubscription!: Subscription;
  private navigationSubscription!: Subscription;



  constructor(private movieService: MovieService, private scrollPositionService: ScrollpositionService, 
    private router: Router, private renderer: Renderer2) {
    this.navigationSubscription = this.router.events.pipe(
      filter((e): e is NavigationStart => e instanceof NavigationStart)
    ).subscribe(e => {
      this.scrollPositionService.setScroll(this.router.url, [window.scrollX, window.scrollY]);
    });
   }

  ngOnInit(): void {
    this.movieSubscription = this.movieService.moviesSubject.subscribe(movies => {
      this.movies = movies;

    });

    this.movieService.getMovies();

  
    // window.scrollTo(this.scrollPositionService.scrollPosition[0],this.scrollPositionService.scrollPosition[1])
  }
  ngAfterViewInit(): void {
    // restore scroll position
    const position = this.scrollPositionService.getScroll(this.router.url);
    if (position) {
      setTimeout(() => {window.scrollTo(position[0], position[1]); 
      }, 100);
    }
  }

  ngOnDestroy(): void {
    
    this.movieSubscription.unsubscribe();
    this.navigationSubscription.unsubscribe();
   
    //save position
    // this.scrollPositionService.scrollPosition = [window.scrollX, window.scrollY]
  }


}
