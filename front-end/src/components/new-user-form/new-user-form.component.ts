import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserForm } from 'src/common-interfaces/ecom-api.types';
import { EcomApiService } from 'src/services/ecom-api.service';
import { EcomStateService } from 'src/services/ecom-state.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
})
export class NewUserFormComponent {
  newUserForm: FormGroup;
  genders = ['Male', 'Female', 'Prefer not to say'];
  constructor(
    public fb: FormBuilder,
    public ecomService: EcomApiService,
    public ecomStateService: EcomStateService,
    public router: Router
  ) {
    this.newUserForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      genderSelection: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
    });
  }

  createNewUser() {
    let body: NewUserForm = {
      firstName: this.newUserForm.controls['firstName'].value,
      lastName: this.newUserForm.controls['lastName'].value,
      gender: this.newUserForm.controls['genderSelection'].value,
      age: this.newUserForm.controls['age'].value,
      email: this.newUserForm.controls['email'].value,
      phone: this.newUserForm.controls['phone'].value,
      dateOfBirth: this.newUserForm.controls['dateOfBirth'].value,
    };
    this.ecomService.createNewUser(body).subscribe({
      next: (_value) => {
        this.ecomStateService.newUserRegistrationForm$.next(
          this.newUserForm.value
        );
        this.router.navigate(['/']);
        this.ecomStateService.showSignoutText$.next(true);
      },
      error: () => {
        alert('backend is down');
      },
    });
  }
}
