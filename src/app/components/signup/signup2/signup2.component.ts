import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.scss']
})
export class Signup2Component {
coms =[
  "No commitments, cancel anytime.",
  "Endless entertainment for one low price.",
  "Unlimited viewing on all your devices."

]

constructor(private userService:UserService, private router: Router){}

get isUserLoggedIn(): boolean {
  return this.userService.isUserLoggedIn;
}

get currentUser(): string | null {
  return localStorage.getItem('username');
}

signOut(): void {
  this.userService.logout();
}
tosignin(){
  this.router.navigate(['signin'])
}
onNext(){
  this.router.navigate(['/signup3'])
}

}
