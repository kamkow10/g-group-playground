import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { H2RoutingModule } from './h2-routing.module';
import { H2Component } from './h2.component';
import {SharedModule} from "../../../../../shared/shared.module";


@NgModule({
  declarations: [
    H2Component
  ],
  imports: [
    CommonModule,
    H2RoutingModule,
    SharedModule
  ]
})
export class H2Module { }
