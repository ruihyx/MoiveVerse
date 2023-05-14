import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Signup1Component } from 'src/app/components/signup/signup1/signup1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';


const routes: Routes =[
  {path:'',
component: Signup1Component}
]

@NgModule({
  declarations: [Signup1Component],
  imports: [
    // CommonModule,
    SharedModule,

    RouterModule.forChild(routes)
  ],
  
})
export class Signup1Module { }
