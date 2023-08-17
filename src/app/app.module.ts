import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CounterPageComponent} from './ngrx/counter-page/counter-page.component';
import {CounterComponent} from './ngrx/counter-page/counter/counter.component';
import {counterReducer} from "./ngrx/counter-page/state/counter.reducer";
import {MatButtonModule} from "@angular/material/button";
import {BookListPageComponent} from './ngrx/book-list-page/book-list-page.component';
import {BookListComponent} from './ngrx/book-list-page/book-list/book-list.component';
import {booksReducer} from "./ngrx/book-list-page/state/books.reducer";
import {collectionReducer} from "./ngrx/book-list-page/state/collection.reducer";
import {BookCollectionComponent} from './ngrx/book-list-page/book-collection/book-collection.component';
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {EffectsModule} from '@ngrx/effects';
import {LoginPageComponent} from './ngrx-effects/components/login-page/login-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {loginReducer} from "./ngrx-effects/state/login.reducers";
import {LoginEffects} from "./ngrx-effects/state/login.effects";
import {TasksPageComponent} from './ngrx-effects/components/tasks-page/tasks-page.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    CounterPageComponent,
    CounterComponent,
    BookListPageComponent,
    BookListComponent,
    BookCollectionComponent,
    LoginPageComponent,
    TasksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer,
      login: loginReducer
    }, {}),
    EffectsModule.forRoot([LoginEffects]),
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
