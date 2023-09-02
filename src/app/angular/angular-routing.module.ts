import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrackByPageComponent} from "./components/track-by-page/track-by-page.component";
import {ResolverPageComponent} from "./components/resolver-page/resolver-page.component";
import {countriesResolver, namesResolver} from "./resolvers/resolvers";

const routes: Routes = [
  {
    path: 'track-by',
    component: TrackByPageComponent
  },
  {
    path: 'resolver',
    component: ResolverPageComponent,
    resolve: {
      countries: countriesResolver,
      names: namesResolver
    }
  },
  {
    path: '',
    redirectTo: 'track-by',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule {
}
