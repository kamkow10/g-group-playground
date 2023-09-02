import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {LoginActions} from "../../state/login.actions";
import {selectLoginState} from "../../state/login.selectors";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {LoginErrorMessage} from "../../enum/login-error-message";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  readonly loginForm: FormGroup;
  private loggedInSubscription: Subscription;
  private errorMessageConfig: MatSnackBarConfig = {
    verticalPosition: 'top',
    panelClass: ['error-message']
  }

  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.loginForm = fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.loggedInSubscription = this.store.select(selectLoginState).subscribe(loginState => {
      if (loginState.loggedIn) {
        this.router.navigateByUrl('/material/tasks');
      }
      if (loginState.errorMessage !== null) {
        this.showLoginErrorMessage(loginState.errorMessage);
      } else {
        this.snackBar.dismiss();
      }
    })
  }

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }

  onSubmit(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.store.dispatch(LoginActions.login({username, password}));
  }

  private showLoginErrorMessage(errorMessage: LoginErrorMessage): void {
    switch (errorMessage) {
      case LoginErrorMessage.INCORRECT_CREDENTIALS:
        this.snackBar.open('Incorrect credentials', '', this.errorMessageConfig);
        break;
      case LoginErrorMessage.UNKNOWN_ERROR:
        this.snackBar.open('Unknown error', '', this.errorMessageConfig);
        break;
    }
  }
}
