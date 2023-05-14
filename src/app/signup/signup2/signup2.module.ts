import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Signup2Component } from 'src/app/components/signup/signup2/signup2.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes =[
  {path:'',
component: Signup2Component}
]
@NgModule({
  declarations: [Signup2Component],
  imports: [
    // CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class Signup2Module { }
