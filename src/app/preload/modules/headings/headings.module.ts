import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeadingsRoutingModule} from './headings-routing.module';
import {HeadingsComponent} from './headings.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    HeadingsComponent
  ],
  imports: [
    CommonModule,
    HeadingsRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class HeadingsModule {
}
