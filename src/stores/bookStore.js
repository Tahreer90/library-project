import booksData from "../Data/books";
import { makeAutoObservable, observable } from "mobx";

class BookStore {
  books = booksData;

  constructor() {
    makeAutoObservable(this);
  }
}
const bookStore = new BookStore();
export default bookStore;
