import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedetailComponent } from '../components/movie/moviedetail/moviedetail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
// import { YouTubePlayerModule } from '@angular/youtube-player';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { TrailerdialogComponent } from '../components/movie/trailerdialog/trailerdialog.component';
import { MoviedetailResolver } from '../moviedetail.resolver';
import { RoleGuard } from '../role.guard';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

const routes: Routes =[
  {path: '',
component: MoviedetailComponent,
canActivate:[RoleGuard],
resolve: {
  movie: MoviedetailResolver
}
  }
]

@NgModule({
  declarations: [MoviedetailComponent,TrailerdialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
    // YouTubePlayerModule,
    RouterModule.forChild(routes),
    // MatDialogModule
  

  ]
})
export class MoviedetailModule { }
