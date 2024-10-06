import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EcomApiService } from 'src/services/ecom-api.service';
import { EcomStateService } from 'src/services/ecom-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  userForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public ecomApiService: EcomApiService,
    public ecomStateService: EcomStateService,
    public router: Router
  ) {
    this.userForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.userForm.get('email')?.value;
  }

  checkUserAccess() {
    this.ecomApiService.checkUserAccess(this.email).subscribe({
      next: (data) => {
        this.ecomStateService.userStatus$.next(data.newUser);
        this.ecomStateService.userDetailForm$.next({
          email: this.email,
        });
        if (data.newUser) {
          this.ecomStateService.newUserMail$.next(this.email);
          this.router.navigate(['/new-user']);
          this.ecomStateService.userDetailForm$.next(null);
        } else {
          this.router.navigate(['/']);
          this.ecomStateService.showSignoutText$.next(true);
        }
      },
      error: () => {
        alert('backend is down');
      },
    });
  }
}
