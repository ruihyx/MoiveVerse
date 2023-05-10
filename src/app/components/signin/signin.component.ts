import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl , Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, switchMap, timer } from 'rxjs';
@Component({

  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
 
  form!: FormGroup;

  constructor(private fb:FormBuilder, private router: Router, private http:HttpClient){
   

  }

  checked = false;
 



  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }
  ngOnInit():void{
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
  


  onSignIn() {
    if (this.form.valid) {
      // Save email and password to local storage or a shared service
      // this.userService.email = this.form.get('email')?.value;
      // this.userService.password = this.password?.value;
      this.router.navigate(['/movie'])

    }
  
}
}

