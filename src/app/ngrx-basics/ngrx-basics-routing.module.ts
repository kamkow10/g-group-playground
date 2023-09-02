import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterPageComponent} from "./counter-page/counter-page.component";
import {BookListPageComponent} from "./book-list-page/book-list-page.component";

const routes: Routes = [
  {
    path: 'counter',
    component: CounterPageComponent
  },
  {
    path: 'book-list',
    component: BookListPageComponent
  },
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxBasicsRoutingModule { }
