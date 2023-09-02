import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {LoginActions} from "../../ngrx-effects/state/login.actions";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private store: Store) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.store.dispatch(LoginActions.logout());
        }
        return throwError(() => err);
      })
    );
  }
}
