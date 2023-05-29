import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TrailerdialogComponent } from '../trailerdialog/trailerdialog.component';
import { Movie, MovieService } from 'src/app/service/movie.service';
// import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})


export class MoviedetailComponent implements OnInit {
  movieId?: number;
  movie:  Movie = {
    id: 0,
    title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    vote_average: 0,
    backdrop_path:'',
    popularity:0,
  };

  trailers: any[] =[];
credits: any;
  images: any;
  castIndex = 0;
  imageIndex = 0;
  backgroundImageUrl !: string;
  constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private dialog: MatDialog) { }

    ngOnInit(): void {
      this.movieId = +this.route.snapshot.paramMap.get('id')!;
      this.movieService.getMovieDetails(this.movieId).subscribe(
        (movie: Movie) => {
          this.movie = movie;
          console.log(this.movie)
        },
        (error) => {
          console.error('Error fetching movie details:', error);
        }
      );
    // Fetch movie credits
    this.movieService.getMovieCredits(this.movieId).subscribe(
      (credits: any) => {
        this.credits = credits.cast;
        console.log(this.credits)
      },
      (error) => {
        console.error('Error fetching movie credits:', error);
      }
    );
    
    // Fetch movie images
    this.movieService.getMovieImages(this.movieId).subscribe(
      (images: any) => {
        this.images = images.backdrops;
        console.log(this.images)
        if (images.backdrops.length > 0) {
          this.backgroundImageUrl ='https://image.tmdb.org/t/p/w500' + images.backdrops[0].file_path
        }
      },
      (error) => {
        console.error('Error fetching movie images:', error);
      }
    );
      // Fetch the trailers
      this.movieService.getMovieTrailers(this.movieId).subscribe(
        (trailers: any) => {
          this.trailers = trailers.results;
        },
        (error) => {
          console.error('Error fetching movie trailers:', error);
        }
      );
    }


  openTrailerDialog(): void {
    const dialogRef = this.dialog.open(TrailerdialogComponent, {
      width: '90%',
      data: { trailers: this.trailers }
    });
  }


}