import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./core/guards/auth.guard";
import {PreloadSelectedModules} from "./core/preloading/preload-selected-modules";

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
    path: 'secret',
    loadChildren: () => import('./secret/secret.module').then(m => m.SecretModule),
    canMatch: [authGuard]
  },
  {
    path: 'standalone',
    loadChildren: () => import('./standalone/routes')
  },
  {
    path: 'typescript-generic',
    loadComponent: () => import('./typescript-generic/typescript-generic.component').then(m => m.TypescriptGenericComponent)
  },
  {
    path: 'preload',
    loadChildren: () => import('./preload/preload.module').then(m => m.PreloadModule),
    data: { preload: true }
  },
  {
    path: '**',
    redirectTo: 'ngrx-basics/counter'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadSelectedModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
