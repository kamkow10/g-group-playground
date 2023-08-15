import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {LoginActions} from "../../state/login.actions";
import {selectLoginState} from "../../state/login.selectors";
import {map, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  readonly loginForm: FormGroup;
  private loggedInSubscription: Subscription;

  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router) {
    this.loginForm = fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.loggedInSubscription = this.store.select(selectLoginState).pipe(
      map(loginState => loginState.loggedIn)
    ).subscribe(loggedIn => {
      if (loggedIn) {
        this.router.navigateByUrl('/tasks');
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
}
