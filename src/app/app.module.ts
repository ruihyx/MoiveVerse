import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { Signup1Component } from './components/signup/signup1/signup1.component';
import { Signup2Component } from './components/signup/signup2/signup2.component';
import { Signup3Component } from './components/signup/signup3/signup3.component';
import { HomeComponent } from './components/home/home/home.component';
import { PlanformComponent } from './components/signup/signup3/planform/planform.component';
import { Signup11Component } from './components/signup/signup11/signup11.component';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
import { MoiveitemComponent } from './components/movie/moiveitem/moiveitem.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviedetailComponent } from './components/movie/moviedetail/moviedetail.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    // SigninComponent,
    // Signup1Component,
    // Signup2Component,
    // Signup3Component,
    // Signup11Component,
    // HomeComponent,
    // PlanformComponent,
    // Signup11Component,
    // MovielistComponent,
    // MoiveitemComponent,
    // MoviedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // FormsModule,
    HttpClientModule,
    CoreModule,
    // SharedModule,


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
