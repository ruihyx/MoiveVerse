import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.scss']
})
export class Signup3Component {
  constructor(private userServie:UserService, private router: Router){}

  onSubmit(){
    this.router.navigate(['/movie'])

  }

}
