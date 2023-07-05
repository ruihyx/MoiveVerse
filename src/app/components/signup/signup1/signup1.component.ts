import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, switchMap, tap, throwError, timer } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss']
})
export class Signup1Component implements OnInit {
  form!: FormGroup;
  private apiUrl = 'https://movienest-8a48fb0ad7f2.herokuapp.com'

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private http: HttpClient) {


  }
  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email], this.checkEmailExists.bind(this)],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
    
  }
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // pwFormControl = new FormControl('', [Validators.required]);



  checkEmailExists(control: FormControl): Observable<{ alreadyExists: boolean } | null> {
    return timer(500).pipe(
      tap(() => console.log('Timer fired')),
      switchMap(() => {
        if (!control.value) {
          return of(null);
        }
        return this.http.post<boolean>(`${this.apiUrl}/auth/check-email`, 
        { email: control.value }).pipe(
          tap(response => console.log('HTTP response', response)),
          map(exists => {
            console.log('Mapping response', exists);
            return exists ? { alreadyExists: true } : null;
          }),
          tap(result => console.log('Result after mapping', result)),
          catchError(err => {
            console.log('Caught error', err);
            return throwError(err);
          })
        );
      }),
      // tap(result => console.log('Final result', result))
    );
  }
  
  signIn(){
    this.router.navigate(['/signin'])
  }
  onNext() {
    if (this.form.valid) {
      // Save email and password to a shared service
      this.userService.email = this.form.get('email')?.value;
      this.userService.password = this.form.get('password')?.value;
      this.router.navigate(['/signup11'])

    }
  }
}
