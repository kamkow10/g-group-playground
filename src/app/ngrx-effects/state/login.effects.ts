import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RestService} from "../services/rest.service";
import {catchError, debounceTime, exhaustMap, map, of, switchMap, tap, timer} from "rxjs";
import {LoginActions} from "./login.actions";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EndOfSessionMessageComponent} from "../components/end-of-session-message/end-of-session-message.component";

@Injectable()
export class LoginEffects {
  private endOfSessionMessageThreshold = 30000;

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap((action) =>
        this.restService.login(action.username, action.password).pipe(
          map(sessionData => LoginActions.loginSuccess(sessionData)),
          catchError((err) => {
            if (err.status === 400) {
              return of(LoginActions.loginFailedIncorrectCredentials());
            } else {
              return of(LoginActions.loginFailedUnknownError());
            }
          })
        )
      )
    )
  );

  showSessionEndMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginSuccess),
      switchMap(sessionData => {
        return timer(sessionData.expiredTime - Date.now() - this.endOfSessionMessageThreshold).pipe(
          tap(() => this.snackBar.openFromComponent(EndOfSessionMessageComponent, {panelClass: 'warning'}))
        )
      })
    ), {dispatch: false}
  );

  logoutOnSessionEnd = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginSuccess),
      switchMap(sessionData => {
        return timer(sessionData.expiredTime - Date.now()).pipe(
          map(() => LoginActions.logout())
        )
      })
    )
  );

  loginFailedIncorrectCredentials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginFailedIncorrectCredentials),
      debounceTime(5000),
      map(() => LoginActions.resetLoginErrorMessage())
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.logout),
      tap(() => this.router.navigateByUrl('/login'))
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private restService: RestService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}
