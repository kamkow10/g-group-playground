import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { H3Component } from './h3.component';

const routes: Routes = [{ path: '', component: H3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class H3RoutingModule { }
