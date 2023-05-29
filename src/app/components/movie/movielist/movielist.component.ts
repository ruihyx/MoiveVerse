import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {Movie, MovieService } from 'src/app/service/movie.service';
// import { Movie } from 'src/app/movie';
import { filter, Subscription } from 'rxjs';  
import { ScrollpositionService } from 'src/app/service/scrollposition.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

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
  private page = 1;



  constructor(private movieService: MovieService, private scrollPositionService: ScrollpositionService, 
    private router: Router, private renderer: Renderer2, private authService:AuthService, private userService: UserService) {
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
    // const position = this.scrollPositionService.positions.movies;
    // if (position){
     
    //   window.scrollTo(...position)
    // }
  }

  get currentUser(): string | null {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const { id, username, email, tmdb_key, exp } = this.authService.getUserData(accessToken)
    return username
  }
  return null
  }

  signOut(): void {
    this.userService.logout();
  }

  onScroll() {
    
    this.page += 1;
    this.movieService.getMovies(this.page);
    console.log("scrolled!!");
  }

  ngOnDestroy(): void {
    
    this.movieSubscription.unsubscribe();
    this.navigationSubscription.unsubscribe();
   
    //save position
    // this.scrollPositionService.scrollPosition = [window.scrollX, window.scrollY]
  }


}
