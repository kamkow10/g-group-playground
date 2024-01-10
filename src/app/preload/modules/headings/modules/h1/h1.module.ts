import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { H1RoutingModule } from './h1-routing.module';
import { H1Component } from './h1.component';
import {SharedModule} from "../../../../../shared/shared.module";


@NgModule({
  declarations: [
    H1Component
  ],
  imports: [
    CommonModule,
    H1RoutingModule,
    SharedModule
  ]
})
export class H1Module { }
