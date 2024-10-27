import { createAction, props } from '@ngrx/store';
import {
  NewUserForm,
  SelectedPhoneInfo,
} from 'src/common-interfaces/ecom-api.types';

export const newUserInfoAction = createAction(
  '[Load New user Information]',
  props<{ userDetails: NewUserForm }>()
);

export const clearNewUserFormAction = createAction(
  '[Load Clear New user Information]'
);

export const selectedPhoneInformationAction = createAction(
  '[Store Selected Phone Information]',
  props<{ selectedPhoneInformation: SelectedPhoneInfo }>()
);

export const selectedSImInformationAction = createAction(
  '[Store Selected Sim Information]',
  props<{ selectedSimInformation: '' }>()
);
