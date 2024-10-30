import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  NewUserForm,
  SelectedPhoneInfo,
} from 'src/common-interfaces/ecom-api.types';

@Injectable({
  providedIn: 'root',
})
export class TentiativeService {
  tempNewUserInfo$ = new BehaviorSubject<NewUserForm>(null);
  tempSelectedDeviceInfo$ = new BehaviorSubject<SelectedPhoneInfo>(null);
  tempSelectedSimInfo$ = new BehaviorSubject<string>('');
  constructor() {}
}
