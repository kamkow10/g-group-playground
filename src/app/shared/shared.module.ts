import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EndOfSessionMessageComponent} from "./components/end-of-session-message/end-of-session-message.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    EndOfSessionMessageComponent
  ],
  exports: [
    EndOfSessionMessageComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatSnackBarModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class SharedModule { }
