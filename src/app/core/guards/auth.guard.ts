import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectLoginState} from "../../ngrx-effects/state/login.selectors";
import {map, Observable} from "rxjs";

export function authGuard(): Observable<boolean> {
  return inject(Store).select(selectLoginState).pipe(map(loginState => loginState.loggedIn));
}
