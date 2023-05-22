import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.scss']
})

export class Signup3Component {
  selectedPlan?: number 
  role?: string 

  
  email?: string 
  password?: string 
  username?: string 
  tmdb_key?: string
  userService: any;


  
  
submitForm(planIndex: number):void{
  this.selectedPlan = planIndex;
  
}
 

  constructor(private userServie:UserService, private router: Router, private http: HttpClient, private authService: AuthService){}
  
  
  onSubmit():void{
    // if (this.selectedPlan !== null && this.email && this.password && this.username) {
    if(this.selectedPlan === 0){
      this.role = 'USER'
    }else if(this.selectedPlan === 1) {
      this.role = 'SUPERUSER'
    } else{
      this.role = 'ADMIN'
    }

   
        if(this.userServie.isUserLoggedIn){
          const data ={
            email:localStorage.getItem('email'),
            password: localStorage.getItem('password') ,
            role:this.role || '',
            tmdb_key:localStorage.getItem('tmdb_Key') ,
            username: localStorage.getItem('username') ,   
          };
    
            console.log("data: ",data)
          this.authService.update(data).subscribe(
            (response) => {
              console.log('User updated successfully:', response);
              // Update the user information in the UserService
          
              localStorage.setItem('accessToken', response.accessToken);
              localStorage.setItem('role', response.role);
                this.router.navigate(['/movie'])}
          )

        }else{
          const data ={
            email:this.userServie.email || '',
            password: this.userServie.password || '',
            role:this.role || '',
            tmdb_key:this.userServie.tmdb_Key || '' ,
            username: this.userServie.username || '', 
            
          };
    
            console.log("data: ",data)
          this.authService.signUp(data).subscribe(
            (response) => {
           
              console.log('Registration successful:', response);
              localStorage.setItem('accessToken', response.accessToken);
              localStorage.setItem('role', response.role);
              if (this.userServie.tmdb_Key) {
                localStorage.setItem('tmdb_Key', this.userServie.tmdb_Key);
              };
              if (this.userServie.password) {
                localStorage.setItem('password', this.userServie.password);
              };

              if (this.userServie.email) {
                localStorage.setItem('email', this.userServie.email);
              };
              if (this.userServie.username) {
                localStorage.setItem('username', this.userServie.username);
              }
             
              
              this.router.navigate(['/movie']);
            },
            (error) => {
          
              console.error('Registration failed:', error);
              
            }
          );

        }

  
      }
    }

