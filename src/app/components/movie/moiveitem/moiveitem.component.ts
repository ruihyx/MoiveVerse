import { Component, Input, OnInit } from '@angular/core';
import {Movie,  MovieService } from 'src/app/service/movie.service';


@Component({
  selector: 'app-moiveitem',
  templateUrl: './moiveitem.component.html',
  styleUrls: ['./moiveitem.component.scss']
})
export class MoiveitemComponent implements OnInit {
  @Input() movie!: Movie;


  constructor(){}
  
  ngOnInit(): void {
    
  }


}
