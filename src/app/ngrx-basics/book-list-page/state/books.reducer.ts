import {Book} from "../book-list/book.model";
import {createReducer, on} from "@ngrx/store";
import {BooksApiActions} from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
