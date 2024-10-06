import { createReducer, on } from '@ngrx/store';
import {
  clearNewUserFormAction,
  newUserInfoAction,
  selectedPhoneInformationAction,
} from './app.action';

export const initialState = {
  userDetails: {},
  selectedPhoneInformation: {},
};

export const reducerFunction = createReducer(
  initialState,
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
  }),
  on(selectedPhoneInformationAction, (state, action) => {
    return {
      ...state,
      selectedPhoneInformation: action.selectedPhoneInformation,
    };
  })
);
