import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { Signup1Component } from './components/signup/signup1/signup1.component';
import { Signup2Component } from './components/signup/signup2/signup2.component';
import { Signup3Component } from './components/signup/signup3/signup3.component';
import { HomeComponent } from './components/home/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup1', component: Signup1Component },
  { path: 'signup2', component: Signup2Component },
  { path: 'signup3', component: Signup3Component },
  { path: 'home', component: HomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
