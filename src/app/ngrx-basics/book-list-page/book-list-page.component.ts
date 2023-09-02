import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {BooksService} from "./book-list/books.service";
import {selectBookCollection, selectBooks} from "./state/books.selector";
import {BooksActions, BooksApiActions} from "./state/books.actions";

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private store: Store,
              private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: books => this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
    })
  }

  onAdd(bookId: string): void {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string): void {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

}
