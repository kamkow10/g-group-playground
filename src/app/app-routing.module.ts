import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterPageComponent} from "./ngrx/counter-page/counter-page.component";

const routes: Routes = [
  {path: 'ngrx/counter', component: CounterPageComponent},
  {path: '**', redirectTo: 'ngrx/counter'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
