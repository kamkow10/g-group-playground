import {createReducer, on} from "@ngrx/store";
import {LoginActions} from "./login.actions";
import {LoginErrorMessage} from "../enum/login-error-message";

export interface LoginState {
  token: string,
  expiredTime: number,
  loggedIn: boolean,
  errorMessage: LoginErrorMessage | null
}

const initialLoginState: LoginState = {
  token: '',
  expiredTime: 0,
  loggedIn: false,
  errorMessage: null
}

export const loginReducer = createReducer(
  initialLoginState,
  on(LoginActions.loginSuccess, (state, sessionData) => ({
      ...state,
      token: sessionData.token,
      expiredTime: sessionData.expiredTime,
      loggedIn: true
    })
  ),
  on(LoginActions.loginFailedIncorrectCredentials, (state) => {
    return {...state, errorMessage: LoginErrorMessage.INCORRECT_CREDENTIALS};
  }),
  on(LoginActions.loginFailedUnknownError, (state) => {
    return {...state, errorMessage: LoginErrorMessage.UNKNOWN_ERROR};
  }),
  on(LoginActions.resetLoginErrorMessage, (state) => {
    return {...state, errorMessage: null};
  }),
)
