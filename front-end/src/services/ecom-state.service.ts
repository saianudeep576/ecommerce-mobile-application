import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  NewUserForm,
  UserDetailsForm,
} from 'src/common-interfaces/ecom-api.types';

@Injectable({
  providedIn: 'root',
})
export class EcomStateService {
  userStatus$ = new BehaviorSubject<boolean>(false);
  userDetailForm$ = new BehaviorSubject<UserDetailsForm | null>(null);
  newUserRegistrationForm$ = new BehaviorSubject<NewUserForm | null>(null);
  showSignoutText$ = new BehaviorSubject<boolean>(false);

  constructor() {}
}
