import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {SessionData} from "../interfaces/session-data";

export const LoginActions = createActionGroup({
  source: 'Login',
  events: {
    'Login': props<{username: string, password: string}>(),
    'Login Success': props<SessionData>(),
    'Login Failed Incorrect Credentials': emptyProps(),
    'Login Failed Unknown Error': emptyProps(),
    'Reset Login Error Message': emptyProps()
  }
});
