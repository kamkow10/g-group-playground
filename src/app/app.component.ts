import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {selectLoginState} from "./ngrx-effects/state/login.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn$: Observable<boolean>;

  constructor(private store: Store) {
    this.loggedIn$ = this.store.select(selectLoginState).pipe(
      map(loginState => loginState.loggedIn)
    );
  }
}
