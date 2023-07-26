import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RestService} from "../services/rest.service";
import {catchError, exhaustMap, map, of} from "rxjs";
import {LoginActions} from "./login.actions";

@Injectable()
export class LoginEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap((action) =>
        this.restService.login(action.username, action.password).pipe(
          map(sessionData => LoginActions.loginSuccess(sessionData)),
          catchError(() => of(LoginActions.loginFailed()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private restService: RestService
  ) {}
}
