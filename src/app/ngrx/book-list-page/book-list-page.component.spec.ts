import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListPageComponent } from './book-list-page.component';
import {StoreModule} from "@ngrx/store";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BookListComponent} from "./book-list/book-list.component";
import {BookCollectionComponent} from "./book-collection/book-collection.component";
import {booksReducer} from "./state/books.reducer";
import {collectionReducer} from "./state/collection.reducer";

describe('BookListPageComponent', () => {
  let component: BookListPageComponent;
  let fixture: ComponentFixture<BookListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookListPageComponent,
        BookListComponent,
        BookCollectionComponent
      ],
      imports: [
        StoreModule.forRoot({
          books: booksReducer,
          collection: collectionReducer
        }),
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
