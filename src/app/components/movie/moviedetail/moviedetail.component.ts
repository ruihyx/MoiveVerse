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
  movie!: Movie;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private dialog: MatDialog) { }
    
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.movieId = +id;
        this.getMovieDetails();
      }
    });
  }

  getMovieDetails(): void {
    if (this.movieId) {
      this.movieService.getMovieDetails(this.movieId).subscribe(movie => {
        this.movie = movie;
      });
    }
  }

  openTrailerDialog(): void {
    if (this.movieId) {
      this.movieService.getMovieVideos(this.movieId).subscribe(videos => {
        const dialogRef = this.dialog.open(TrailerdialogComponent, {
          width:'800px',
          height:'450px',
          data: { videos: videos }
        });
      });
    }
  }
}