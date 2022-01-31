import React, { useState } from "react";
import bookStore from "../stores/bookStore";
import BookItem from "./BookItem";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";

const BookList = () => {
  const [query, setQuery] = useState("");
  const books = bookStore.books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.some((genre) =>
          genre.toLowerCase().includes(query.toLowerCase())
        )
    )
    .map((book) => <BookItem key={book.id} book={book} />);

  return (
    <div className="list">
      <SearchBar setQuery={setQuery} />
      {books}
    </div>
  );
};

export default observer(BookList);
