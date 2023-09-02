import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecretComponent} from './secret.component';
import {authGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: SecretComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretRoutingModule { }
