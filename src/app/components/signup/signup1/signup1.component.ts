import { Component } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss']
})
export class Signup1Component {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  pwFormControl = new FormControl('', [Validators.required]);
}
