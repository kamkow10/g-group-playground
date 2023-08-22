import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {selectLoginState} from "../state/login.selectors";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isLoggedIn!: boolean;
  private token!: string;

  constructor(private store: Store) {
    this.store.select(selectLoginState).subscribe(loginState => {
      this.isLoggedIn = loginState.loggedIn;
      this.token = loginState.token;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isLoggedIn && this.token) {
      req = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + this.token)
      });
    }
    return next.handle(req);
  }
}
