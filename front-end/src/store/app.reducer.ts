import { createReducer, on } from '@ngrx/store';
import { NewUserForm, SelectedPhoneInfo } from '../common-interfaces/ecom-api.types';
import {
  clearNewUserFormAction,
  newUserInfoAction,
  selectedPhoneInformationAction,
  selectedSImInformationAction,
} from './app.action';

export interface AppState {
  userDetails: NewUserForm,
  selectedPhoneInformation: SelectedPhoneInfo,
  selectedSimInformation: string
}

export const userDetailsInitialState = {
  userDetails: {},
};

export const selectedPhoneInitialState = {
  selectedPhoneInformation: {},
};

export const selectedSimInitialState = {
  selectedSimInformation: '',
};

export const userDetailsReducerFunction = createReducer(
  userDetailsInitialState,
  on(newUserInfoAction, (state, action) => {
    return {
      ...state,
      userDetails: action.userDetails,
    };
  }),
  on(clearNewUserFormAction, (state, _action) => {
    return {
      ...state,
      userDetails: {},
    };
  })
);

export const selectedPhoneReducerFunction = createReducer(
  selectedPhoneInitialState,
  on(selectedPhoneInformationAction, (state, action) => {
    return {
      ...state,
      selectedPhoneInformation: action.selectedPhoneInformation,
    };
  })
);

export const selectedSimReducerFunction = createReducer(
  selectedSimInitialState,
  on(selectedSImInformationAction, (state, action) => {
    return {
      ...state,
      selectedSimInformation: action.selectedSimInformation,
    };
  })
);
