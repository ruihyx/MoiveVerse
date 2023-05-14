import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../components/signin/signin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [SigninComponent],
  imports: [
    // CommonModule,
    // MatFormFieldModule,
    // MatInputModule,
  //  MatCheckboxModule,
  SharedModule,
    RouterModule.forChild([{ path:'', component: SigninComponent }])
  

  ]
})
export class SigninModule { }
