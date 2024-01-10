import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MountainsRoutingModule } from './mountains-routing.module';
import { MountainsComponent } from './mountains.component';
import {SharedModule} from "../../../../../shared/shared.module";


@NgModule({
  declarations: [
    MountainsComponent
  ],
  imports: [
    CommonModule,
    MountainsRoutingModule,
    SharedModule
  ]
})
export class MountainsModule { }
