import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { H3RoutingModule } from './h3-routing.module';
import { H3Component } from './h3.component';
import {SharedModule} from "../../../../../shared/shared.module";


@NgModule({
  declarations: [
    H3Component
  ],
  imports: [
    CommonModule,
    H3RoutingModule,
    SharedModule
  ]
})
export class H3Module { }
