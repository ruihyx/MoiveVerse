import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovielistComponent } from '../components/movie/movielist/movielist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MoiveitemComponent } from '../components/movie/moiveitem/moiveitem.component';
// import { MoiveitemComponent } from '../components/movie/moiveitem/moiveitem.component';

const routes: Routes =[
  {path: '',
component: MovielistComponent}
]

@NgModule({
  declarations: [MovielistComponent, MoiveitemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MovielistModule { }
