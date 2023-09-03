import {Route} from "@angular/router";
import {HumansComponent} from "./humans/humans.component";
import {CatsComponent} from "./cats/cats.component";

export default [
  {
    path: 'humans',
    component: HumansComponent
  },
  {
    path: 'cats',
    component: CatsComponent
  },
  {
    path: 'dogs',
    loadComponent: () => import('./dogs/dogs.component').then(m => m.DogsComponent)
  },
  {
    path: '',
    redirectTo: 'humans',
    pathMatch: 'full',
  }
] as Route[];
