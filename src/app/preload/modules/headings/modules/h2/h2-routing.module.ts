import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { H2Component } from './h2.component';

const routes: Routes = [{ path: '', component: H2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class H2RoutingModule { }
