import booksData from "../Data/books";
import { makeAutoObservable, observable } from "mobx";

class BookStore {
  books = booksData;

  constructor() {
    makeAutoObservable(this);
  }
  addBook = (book) => {
    book.id = this.books[this.books.length - 1].id + 1;
    console.log(book);
    this.books = [...this.books, book];
  };
}
const bookStore = new BookStore();
export default bookStore;
