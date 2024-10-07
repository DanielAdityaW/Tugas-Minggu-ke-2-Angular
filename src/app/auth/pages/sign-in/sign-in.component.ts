import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { IToken } from '../../../core/interfaces/i-token';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['danieladitya', [Validators.required]],
      password: ['1234qwerty', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      // Prevent access when logged in.
      this.router.navigate(['admin']);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      let payload = {
        username: this.form.value.username,
        password: this.form.value.password
      }
      this.authenticationService
        .signIn(payload)
        .pipe(catchError(this.authenticationService.baseHttp.handleError))
        .subscribe((resp: IToken) => {
          this.authenticationService.sessionStart();
          this.authenticationService.token = resp.access;
          this.router.navigate(['admin']);
        });
    }
  }
}
