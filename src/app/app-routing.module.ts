import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)
  },
  {
    path: 'ngrx-basics',
    loadChildren: () => import('./ngrx-basics/ngrx-basics.module').then(m => m.NgrxBasicsModule)
  },
  {
    path: 'ngrx-effects',
    loadChildren: () => import('./ngrx-effects/ngrx-effects.module').then(m => m.NgrxEffectsModule)
  },
  {
    path: '**',
    redirectTo: 'ngrx-basics/counter'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
