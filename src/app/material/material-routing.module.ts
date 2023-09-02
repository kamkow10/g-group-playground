import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksPageComponent} from "./components/tasks-page/tasks-page.component";
import {AccordionPageComponent} from "./components/accordion-page/accordion-page.component";
import {VirtualScrollPageComponent} from "./components/virtual-scroll-page/virtual-scroll-page.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksPageComponent
  },
  {
    path: 'accordion',
    component: AccordionPageComponent
  },
  {
    path: 'virtual-scroll',
    component: VirtualScrollPageComponent
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
