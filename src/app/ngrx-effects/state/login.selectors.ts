import {createFeatureSelector, createSelector} from "@ngrx/store";
import {LoginState} from "./login.reducers";

const loginState = createFeatureSelector<LoginState>('login');

export const selectLoginState = createSelector(
  loginState,
  loginState => loginState
);
