import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Movie,  MovieService } from 'src/app/service/movie.service';


@Component({
  selector: 'app-moiveitem',
  templateUrl: './moiveitem.component.html',
  styleUrls: ['./moiveitem.component.scss']
})
export class MoiveitemComponent implements OnInit {
  @Input() movie!: Movie;
  loading = false;


  constructor(private router: Router){}
  
  ngOnInit(): void {
    
  }
  viewMovieDetail(id: number): void {
    this.loading = true;
    this.router.navigate(['/movies', id]);
  }


}
