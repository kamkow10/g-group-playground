import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { H1Component } from './h1.component';

const routes: Routes = [{ path: '', component: H1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class H1RoutingModule { }
