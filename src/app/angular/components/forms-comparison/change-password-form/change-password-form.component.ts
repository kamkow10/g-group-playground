import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {map, Observable, timer} from "rxjs";

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {
  form!: FormGroup<ChangePasswordForm>;
  result = '';
  readonly Fields = Fields;

  constructor(private readonly fb: NonNullableFormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  get name(): FormControl<string> {
    return this.form.get(Fields.name) as FormControl;
  }

  submit(): void {
    if (this.form.errors?.['equalPasswords']) {
      this.result = 'Passwords cannot be the same';
    }
    if (this.form.invalid) {
      return;
    }
    this.result = `
    Everything is OK!
    This is form value: ${JSON.stringify(this.form.value)}
    `;
  }

  private initForm(): void {
    this.form = this.fb.group({
      [Fields.name]: this.fb.control(
        '',
        {
          validators: Validators.required,
          asyncValidators: excludedNamesValidator(['John', 'Steve']),
          updateOn: 'blur'
        }
      ),
      [Fields.oldPassword]: this.fb.control<string>(
        '', Validators.required
      ),
      [Fields.newPassword]: this.fb.control<string>(
        '', Validators.required
      )
    }, {
      updateOn: "submit",
      validators: equalPasswordsValidator()
    });
  }
}

interface ChangePasswordForm {
  [Fields.name]: FormControl<string>;
  [Fields.oldPassword]: FormControl<string>;
  [Fields.newPassword]: FormControl<string>;
}

enum Fields {
  name = 'name',
  oldPassword = 'oldPassword',
  newPassword = 'newPassword'
}

function equalPasswordsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const oldPwd = control.get(Fields.oldPassword)?.value;
    const newPwd = control.get(Fields.newPassword)?.value;

    return oldPwd && newPwd && oldPwd === newPwd ?
      { equalPasswords: true } :
      null;
  }
}

function excludedNamesValidator(excludedNames: string[]): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    // Fake async operation
    return timer(3000).pipe(
      map(() => {
        const name = control?.value;
        return excludedNames.some(n => n === name) ? { excludedNames } : null;
      })
    )
  }
}
