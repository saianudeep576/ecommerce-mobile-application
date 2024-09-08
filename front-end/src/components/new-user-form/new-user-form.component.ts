import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent {
  newUserForm: FormGroup;
  genders = ['Male', 'Female', 'Prefer not to say']
  constructor(public fb: FormBuilder) {
    this.newUserForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      genderSelection: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('',Validators.required)
    })
  }
}
