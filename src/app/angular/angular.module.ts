import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularRoutingModule} from './angular-routing.module';
import {TrackByPageComponent} from "./components/track-by-page/track-by-page.component";
import {ResolverPageComponent} from "./components/resolver-page/resolver-page.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TrackByPageComponent,
    ResolverPageComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    MatInputModule,
    FormsModule
  ]
})
export class AngularModule { }
