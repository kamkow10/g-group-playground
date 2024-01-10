import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxEffectsRoutingModule} from './ngrx-effects-routing.module';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    NgrxEffectsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    MatButtonModule,
    SharedModule
  ]
})
export class NgrxEffectsModule { }
