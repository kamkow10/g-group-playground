import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadRoutingModule } from './preload-routing.module';
import { PreloadComponent } from './preload.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PreloadComponent
  ],
  imports: [
    CommonModule,
    PreloadRoutingModule,
    SharedModule
  ]
})
export class PreloadModule { }
