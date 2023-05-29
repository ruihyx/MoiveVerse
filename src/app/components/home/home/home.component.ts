import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private jwtHelper = new JwtHelperService();

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private authService: AuthService) {
  }
  
  get email() {
    return this.form.get('email')
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],

    })

  



  }
  tosignin(){
    this.router.navigate(['signin'])
  }
  getStart(){
    this.router.navigate(['signup1'])
  }

  get isUserLoggedIn(): boolean {
    return this.userService.isUserLoggedIn;
  }
  
  // get currentUser(): string | null {
  //   const accessToken = localStorage.getItem('accessToken')
  //   const {id, username, email, tmdb_key, exp} =
  //    this.jwtHelper.decodeToken(accessToken);

  //   // return localStorage.getItem('username');
  // }
  
  get currentUser(): string | null {
    // const accessToken = localStorage.getItem('accessToken');
    // if (accessToken) {
    //   const { id, username, email, tmdb_key, exp } = this.jwtHelper.decodeToken(accessToken);
    //   return username;
    // }
    // return null;
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const { id, username, email, tmdb_key, exp } = this.authService.getUserData(accessToken)
    return username
  }
  return null
  }

  signOut(): void {
    this.userService.logout();
  }
  
  onMovielist():void{
    this.router.navigate(['/movie'])
  }
}