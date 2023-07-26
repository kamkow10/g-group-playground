import {createReducer, on} from "@ngrx/store";
import {LoginActions} from "./login.actions";

export interface LoginState {
  token: string,
  expiredTime: number,
  loggedIn: boolean
}

const initialLoginState: LoginState = {
  token: '',
  expiredTime: 0,
  loggedIn: false
}

export const loginReducer = createReducer(
  initialLoginState,
  on(LoginActions.loginSuccess, (state, sessionData) => ({
      token: sessionData.token,
      expiredTime: sessionData.expiredTime,
      loggedIn: true
    })
  ),
  on(LoginActions.loginFailed, (state) => ({
      ...state,
      loggedIn: false
    })
  ),
)
