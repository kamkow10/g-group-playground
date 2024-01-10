import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListingsComponent} from './listings.component';

const routes: Routes = [
  {
    path: '',
    component: ListingsComponent,
    children: [
      {
        path: 'cities',
        loadChildren: () => import('./modules/cities/cities.module').then(m => m.CitiesModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./modules/countries/countries.module').then(m => m.CountriesModule)
      },
      {
        path: 'mountains',
        loadChildren: () => import('./modules/mountains/mountains.module').then(m => m.MountainsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingsRoutingModule {
}
