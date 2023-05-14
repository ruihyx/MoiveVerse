import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanformComponent } from 'src/app/components/signup/signup3/planform/planform.component';
import { RouterModule, Routes } from '@angular/router';
import { Signup3Component } from 'src/app/components/signup/signup3/signup3.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes =[
  {path: '',
component: Signup3Component}
]

@NgModule({
  declarations: [Signup3Component,PlanformComponent],
  imports: [
    // CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class Signup3Module { }
