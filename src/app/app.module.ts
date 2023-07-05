import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterPageComponent } from './ngrx/counter-page/counter-page.component';
import { CounterComponent } from './ngrx/counter-page/counter/counter.component';
import {counterReducer} from "./ngrx/counter-page/state/counter.reducer";
import {MatButtonModule} from "@angular/material/button";
import { BookListPageComponent } from './ngrx/book-list-page/book-list-page.component';
import { BookListComponent } from './ngrx/book-list-page/book-list/book-list.component';
import {booksReducer} from "./ngrx/book-list-page/state/books.reducer";
import {collectionReducer} from "./ngrx/book-list-page/state/collection.reducer";
import { BookCollectionComponent } from './ngrx/book-list-page/book-collection/book-collection.component';
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    CounterPageComponent,
    CounterComponent,
    BookListPageComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }, {}),
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
