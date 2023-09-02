import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from "./ngrx-basics/counter-page/state/counter.reducer";
import {booksReducer} from "./ngrx-basics/book-list-page/state/books.reducer";
import {collectionReducer} from "./ngrx-basics/book-list-page/state/collection.reducer";
import {EffectsModule} from '@ngrx/effects';
import {loginReducer} from "./ngrx-effects/state/login.reducers";
import {LoginEffects} from "./ngrx-effects/state/login.effects";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent
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
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    CoreModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
