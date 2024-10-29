import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  NewUserForm,
  SelectedPhoneInfo,
  UserDetailsForm,
} from 'src/common-interfaces/ecom-api.types';
import { newUserFormSelector, selectedDeviceInfoSelector, selectedSimInfoSelector } from 'src/store/app.selector';

@Injectable({
  providedIn: 'root',
})
export class EcomStateService {
  userStatus$ = new BehaviorSubject<boolean>(false);
  userDetailForm$ = new BehaviorSubject<UserDetailsForm | null>(null);
  newUserRegistrationForm$: Observable<NewUserForm> = this.store.pipe(select(newUserFormSelector));
  showSignoutText$ = new BehaviorSubject<boolean>(false);
  newUserMail$ = new BehaviorSubject<string>('');
  selectedPhoneInformation$: Observable<SelectedPhoneInfo> = this.store.pipe(select(selectedDeviceInfoSelector));
  selectedSimInformation$: Observable<string> = this.store.pipe(select(selectedSimInfoSelector));

  constructor(public store: Store) { }
}
