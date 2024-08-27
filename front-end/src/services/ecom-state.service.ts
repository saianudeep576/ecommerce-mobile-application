import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetailsForm } from 'src/common-interfaces/ecom-api.types';

@Injectable({
  providedIn: 'root',
})
export class EcomStateService {
  userStatus$ = new BehaviorSubject<boolean>(false);
  userDetailForm$ = new BehaviorSubject<UserDetailsForm>(<any>null);

  constructor() {}
}
