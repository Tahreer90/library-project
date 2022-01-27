import React from "react";
import bookStore from "../stores/bookStore";
import BookItem from "./BookItem";

const BookList = () => {
  const books = bookStore.books.map((book) => (
    <BookItem key={book.id} book={book} />
  ));

  return <div>{books}</div>;
};

export default BookList;
