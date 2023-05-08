import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss']
})
export class Signup1Component implements OnInit {
  form!: FormGroup;

  constructor(private fb:FormBuilder, private router: Router,private userService: UserService){
   

  }
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
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // pwFormControl = new FormControl('', [Validators.required]);

  onNext() {
    if (this.form.valid) {
      // Save email and password to local storage or a shared service
      this.userService.email = this.form.get('email')?.value;
      this.userService.password = this.password?.value;
      this.router.navigate(['/signup11'])

    }
  }}
