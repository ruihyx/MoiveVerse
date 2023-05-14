import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, switchMap, timer } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
@Component({

  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router, 
    private http: HttpClient, 
    private userService: UserService,
    private authService: AuthService) {


  }

  get rememberMe() {
    return this.form.get('rememberMe');
  }




  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false] 
    })
  }



  //   onSignIn() {
  //     if (this.form.valid) {
  //       // Save email and password to local storage or a shared service
  //       this.userService.email = this.form.get('email')?.value;
  //       this.userService.password = this.form.get('password')?.value;
  //       this.router.navigate(['/movie'])

  //     }

  // }
  onSignIn() {
    if (this.form.valid) {

      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      });

      this.authService.signIn(this.form.value,{headers}).subscribe(
        (res) => {
          // 存储accessToken和角色到localStorage
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('role', res.role);
          this.router.navigateByUrl('/movie');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}

