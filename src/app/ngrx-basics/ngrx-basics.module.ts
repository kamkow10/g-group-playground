import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxBasicsRoutingModule} from './ngrx-basics-routing.module';
import {BookListComponent} from "./book-list-page/book-list/book-list.component";
import {CounterPageComponent} from "./counter-page/counter-page.component";
import {CounterComponent} from "./counter-page/counter/counter.component";
import {BookListPageComponent} from "./book-list-page/book-list-page.component";
import {BookCollectionComponent} from "./book-list-page/book-collection/book-collection.component";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    CounterPageComponent,
    CounterComponent,
    BookListPageComponent,
    BookListComponent,
    BookCollectionComponent,
  ],
  imports: [
    CommonModule,
    NgrxBasicsRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class NgrxBasicsModule {
}
