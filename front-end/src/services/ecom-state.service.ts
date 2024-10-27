import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  NewUserForm,
  SelectedPhoneInfo,
  UserDetailsForm,
} from 'src/common-interfaces/ecom-api.types';

@Injectable({
  providedIn: 'root',
})
export class EcomStateService {
  userStatus$ = new BehaviorSubject<boolean>(false);
  userDetailForm$ = new BehaviorSubject<UserDetailsForm | null>(null);
  newUserRegistrationForm$: Observable<NewUserForm>;
  showSignoutText$ = new BehaviorSubject<boolean>(false);
  newUserMail$ = new BehaviorSubject<string>('');
  selectedPhoneInformation$: Observable<SelectedPhoneInfo>;

  constructor() {}
}
