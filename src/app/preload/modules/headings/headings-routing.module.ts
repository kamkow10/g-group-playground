import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeadingsComponent} from './headings.component';

const routes: Routes = [
  {
    path: '',
    component: HeadingsComponent,
    children: [
      {
        path: 'h1',
        loadChildren: () => import('./modules/h1/h1.module').then(m => m.H1Module)
      },
      {
        path: 'h2',
        loadChildren: () => import('./modules/h2/h2.module').then(m => m.H2Module)
      },
      {
        path: 'h3',
        loadChildren: () => import('./modules/h3/h3.module').then(m => m.H3Module)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(
    routes
  )],
  exports: [RouterModule]
})
export class HeadingsRoutingModule {
}
