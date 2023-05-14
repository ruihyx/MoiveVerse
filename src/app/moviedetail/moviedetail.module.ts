import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedetailComponent } from '../components/movie/moviedetail/moviedetail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
// import { YouTubePlayerModule } from '@angular/youtube-player';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { TrailerdialogComponent } from '../components/movie/trailerdialog/trailerdialog.component';

const routes: Routes =[
  {path: '',
component: MoviedetailComponent}
]

@NgModule({
  declarations: [MoviedetailComponent,TrailerdialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    YouTubePlayerModule,
    RouterModule.forChild(routes),
    MatDialogModule
  

  ]
})
export class MoviedetailModule { }
