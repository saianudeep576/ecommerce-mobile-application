import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NewUserForm } from 'src/common-interfaces/ecom-api.types';
import { EcomApiService } from 'src/services/ecom-api.service';
import { EcomStateService } from 'src/services/ecom-state.service';
import { newUserInfoAction } from 'src/store/app.action';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
})
export class NewUserFormComponent {
  newUserForm: FormGroup;
  storeForm: FormGroup;
  genders = ['Male', 'Female', 'Prefer not to say'];
  data$: any;
  constructor(
    public fb: FormBuilder,
    public ecomService: EcomApiService,
    public ecomStateService: EcomStateService,
    public router: Router,
    public store: Store<{ selector: any }>
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
        this.ecomStateService.newUserRegistrationForm$ =
          this.store.select('selector');
        this.router.navigate(['/']);
        this.store.dispatch(
          newUserInfoAction({ userDetails: this.newUserForm.value })
        );
        this.ecomStateService.showSignoutText$.next(true);
      },
      error: () => {
        alert('backend is down');
      },
    });
  }
}
