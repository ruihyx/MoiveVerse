import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { Signup1Component } from './components/signup/signup1/signup1.component';
import { Signup2Component } from './components/signup/signup2/signup2.component';
import { Signup3Component } from './components/signup/signup3/signup3.component';
import { Signup11Component } from './components/signup/signup11/signup11.component';
import { HomeComponent } from './components/home/home/home.component';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
const routes: Routes = [
  { path: '', redirectTo: '/signup1', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup1', component: Signup1Component },
  { path: 'signup2', component: Signup2Component },
  { path: 'signup3', component: Signup3Component },
  { path: 'home', component: HomeComponent },
  { path:'signup11', component: Signup11Component },
  { path:'movie', component: MovielistComponent }
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
