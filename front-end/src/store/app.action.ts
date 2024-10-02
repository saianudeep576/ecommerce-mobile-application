import { createAction, props } from '@ngrx/store';
import { NewUserForm } from 'src/common-interfaces/ecom-api.types';

export const newUserInfoAction = createAction(
  '[Load New user Information]',
  props<{ userDetails: NewUserForm }>()
);

export const clearNewUserFormAction = createAction(
  '[Load Clear New user Information]'
);
