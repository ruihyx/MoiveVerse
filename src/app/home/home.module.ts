import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    // CommonModule,
    SharedModule,
    RouterModule.forChild([{path:'', component: HomeComponent}])
  ]
})
export class HomeModule { }
