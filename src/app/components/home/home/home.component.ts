import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
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
  
  get currentUser(): string | null {
    return localStorage.getItem('username');
  }
  
  signOut(): void {
    this.userService.logout();
  }
}