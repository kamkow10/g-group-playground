import {Component, OnDestroy} from '@angular/core';
import {MatSnackBarRef} from "@angular/material/snack-bar";
import {Store} from "@ngrx/store";
import {selectLoginState} from "../../../ngrx-effects/state/login.selectors";
import {take} from "rxjs";

@Component({
  selector: 'app-end-of-session-message',
  templateUrl: './end-of-session-message.component.html',
  styleUrls: ['./end-of-session-message.component.scss']
})
export class EndOfSessionMessageComponent implements OnDestroy {
  public secondsToLogout!: number;
  private expiredTokenTimer: any;
  private loginState$;

  constructor(public snackBarRef: MatSnackBarRef<EndOfSessionMessageComponent>,
              private store: Store) {
    this.loginState$ = this.store.select(selectLoginState).pipe(take(1)).subscribe(loginState => {
      this.secondsToLogout = Math.floor((loginState.expiredTime - Date.now()) / 1000);
      this.expiredTokenTimer = setInterval(() => {
        this.secondsToLogout = this.secondsToLogout - 1;
        if (this.secondsToLogout < 0) {
          this.snackBarRef.dismiss();
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.expiredTokenTimer);
    this.loginState$.unsubscribe();
  }
}
