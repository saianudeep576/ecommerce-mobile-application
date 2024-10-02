import { createReducer, on } from '@ngrx/store';
import { clearNewUserFormAction, newUserInfoAction } from './app.action';

export const initialState = {
  userDetails: {},
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
  })
);
