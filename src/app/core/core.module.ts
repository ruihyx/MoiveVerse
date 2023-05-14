import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
import { MovieService } from '../service/movie.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    MovieService
  ]
})
export class CoreModule { }
