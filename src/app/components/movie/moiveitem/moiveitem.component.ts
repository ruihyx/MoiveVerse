import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import {Movie,  MovieService } from 'src/app/service/movie.service';


@Component({
  selector: 'app-moiveitem',
  templateUrl: './moiveitem.component.html',
  styleUrls: ['./moiveitem.component.scss']
})
export class MoiveitemComponent implements OnInit {
  @Input() movie!: Movie;
  loading = false;


  constructor(private router: Router, private authService:AuthService){}
  
  ngOnInit(): void {
    
  }

  viewMovieDetail(id: number): void {
    this.loading = true;
    this.router.navigate(['/movies', id]);
    const token = localStorage.getItem('accessToken')
    if(token)
    console.log(this.authService.getUserData(token))
    
  }


}
