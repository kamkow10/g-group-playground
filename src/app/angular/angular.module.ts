import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularRoutingModule} from './angular-routing.module';
import {TrackByPageComponent} from "./components/track-by-page/track-by-page.component";
import {ResolverPageComponent} from "./components/resolver-page/resolver-page.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormsComparisonComponent } from './components/forms-comparison/forms-comparison.component';
import {MatButtonModule} from "@angular/material/button";
import { ChangePasswordFormComponent } from './components/forms-comparison/change-password-form/change-password-form.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    TrackByPageComponent,
    ResolverPageComponent,
    FormsComparisonComponent,
    ChangePasswordFormComponent
  ],
    imports: [
        CommonModule,
        AngularRoutingModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})
export class AngularModule { }
