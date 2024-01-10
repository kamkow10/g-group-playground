import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreloadComponent} from './preload.component';

const routes: Routes = [
  {
    path: '',
    component: PreloadComponent,
    children: [
      {
        path: 'listings',
        loadChildren: () => import('./modules/listings/listings.module').then(m => m.ListingsModule)
      },
      {
        path: 'headings',
        loadChildren: () => import('./modules/headings/headings.module').then(m => m.HeadingsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadRoutingModule {
}
