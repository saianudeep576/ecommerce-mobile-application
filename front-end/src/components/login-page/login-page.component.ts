import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  EmailValidator,
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
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required]),
    });
  }

  get userName() {
    return this.userForm.get('userName')?.value;
  }

  get email() {
    return this.userForm.get('email')?.value;
  }

  get contactNumber() {
    return this.userForm.get('contactNumber')?.value;
  }

  checkUserAccess() {
    this.ecomApiService
      .checkUserAccess(this.userName, this.email, this.contactNumber)
      .subscribe({
        next: (data) => {
          this.ecomStateService.userStatus$.next(data.newUser);
          this.ecomStateService.userDetailForm$.next({
            userName: this.userName,
            email: this.email,
            contactNumber: this.contactNumber,
          });
          this.router.navigate(['/']);
        },
        error: () => {
          alert('backend is down');
        },
      });
  }
}
