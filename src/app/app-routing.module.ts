// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { SigninComponent } from './components/signin/signin.component';
// import { Signup1Component } from './components/signup/signup1/signup1.component';
// import { Signup2Component } from './components/signup/signup2/signup2.component';
// import { Signup3Component } from './components/signup/signup3/signup3.component';
// import { Signup11Component } from './components/signup/signup11/signup11.component';
// import { HomeComponent } from './components/home/home/home.component';
// import { MovielistComponent } from './components/movie/movielist/movielist.component';
// const routes: Routes = [
//   { path: '', redirectTo: '/signup1', pathMatch: 'full' },
//   { path: 'signin', component: SigninComponent },
//   { path: 'signup1', component: Signup1Component },
//   { path: 'signup2', component: Signup2Component },
//   { path: 'signup3', component: Signup3Component },
//   { path: 'home', component: HomeComponent },
//   { path:'signup11', component: Signup11Component },
//   { path:'movie', component: MovielistComponent }
  

// ];


// @NgModule({
//   imports: [RouterModule.forRoot(routes),


//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Auth1Guard } from './auth1.guard';



const routes: Routes = [



   { path: '',  canActivate: [Auth1Guard],loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'signup1', loadChildren: () => import('./signup/signup1/signup1.module').then(m => m.Signup1Module) },
  { path: 'signup11', loadChildren: () => import('./signup/signup11/signup11.module').then(m => m.Signup11Module) },
  { path: 'signup2', loadChildren: () => import('./signup/signup2/signup2.module').then(m => m.Signup2Module) },
  { path: 'signup3', loadChildren: () => import('./signup/signup3/signup3.module').then(m => m.Signup3Module) },
  { path: 'movie', loadChildren: () => import('./movielist/movielist.module').then(m => m.MovielistModule) },
  { path: 'movies/:id', loadChildren: () => import('./moviedetail/moviedetail.module').then(m => m.MoviedetailModule) },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, ),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
