import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

const featureName = createFeatureSelector<AppState>('ecom');

export const newUserFormSelector = createSelector(featureName, (state) => state?.userDetails);

export const selectedDeviceInfoSelector = createSelector(featureName, (state) => state?.selectedPhoneInformation);

export const selectedSimInfoSelector = createSelector(featureName, (state) => state?.selectedSimInformation);

