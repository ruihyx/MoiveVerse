import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SigninComponent } from 'src/app/components/signin/signin.component';
import { Signup11Component } from 'src/app/components/signup/signup11/signup11.component';
import { RouterModule, Routes } from '@angular/router';
// import { Signup3Component } from 'src/app/components/signup/signup3/signup3.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes=[
  {path: '',
component: Signup11Component}
]
@NgModule({
  declarations: [Signup11Component],
  imports: [
    // CommonModule,
    SharedModule,
    // ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Signup11Module { }
