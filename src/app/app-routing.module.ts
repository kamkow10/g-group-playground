import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterPageComponent} from "./ngrx/counter-page/counter-page.component";
import {BookListPageComponent} from "./ngrx/book-list-page/book-list-page.component";
import {LoginPageComponent} from "./ngrx-effects/components/login-page/login-page.component";
import {TasksPageComponent} from "./material/components/tasks-page/tasks-page.component";
import {AccordionPageComponent} from "./material/components/accordion-page/accordion-page.component";
import {VirtualScrollPageComponent} from "./material/components/virtual-scroll-page/virtual-scroll-page.component";

const routes: Routes = [
  {path: 'ngrx/counter', component: CounterPageComponent},
  {path: 'ngrx/book-list', component: BookListPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'tasks', component: TasksPageComponent},
  {path: 'accordion', component: AccordionPageComponent},
  {path: 'virtual-scroll', component: VirtualScrollPageComponent},
  {path: '**', redirectTo: 'ngrx/counter'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
