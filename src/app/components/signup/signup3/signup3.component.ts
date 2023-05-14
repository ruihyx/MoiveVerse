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


  
  
submitForm(planIndex: number):void{
  this.selectedPlan = planIndex;
  
}
 

  constructor(private userServie:UserService, private router: Router, private http: HttpClient, private authService: AuthService){}
  
  
  onSubmit():void{
    // if (this.selectedPlan !== null && this.email && this.password && this.username) {
      const data ={
        username: this.userServie.username || '', 
        
        password: this.userServie.password || '',
        email:this.userServie.email || '',
        role:'ADMIN',
        tmdb_key:this.userServie.tmdb_Key || '',
        // selectedPlan: this.selectedPlan
        
      };
        console.log("data: ",data)

        this.authService.signUp(data).subscribe(
          (response) => {
            // 处理注册成功的响应
            console.log('Registration successful:', response);
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('role', response.role);
            // 进行进一步的导航或处理
            this.router.navigate(['/movie']);
          },
          (error) => {
            // 处理注册失败的错误
            console.error('Registration failed:', error);
            // 进行错误处理或显示适当的错误消息
          }
        );
      }
    }

