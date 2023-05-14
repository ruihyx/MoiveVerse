import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup11',
  templateUrl: './signup11.component.html',
  styleUrls: ['./signup11.component.scss']
})
export class Signup11Component implements OnInit{
  form!: FormGroup

  constructor(private fb:FormBuilder, private router: Router, private userService: UserService){
   

  }
  get username(){
    return this.form.get('username')
  }

  get tmdb(){
    return this.form.get('tmdb')
  }
  ngOnInit():void{
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      tmdb: ['', [Validators.required]],
    })
  }

  onNext(){
    this.userService.username = this.username?.value;
    this.userService.tmdb_Key = this.tmdb?.value;
    this.router.navigate(['/signup2'])

  }


 
}
