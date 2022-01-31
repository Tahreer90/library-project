import React from "react";

function SearchBar({ setQuery }) {
  return (
    <center>
      <input
        className="search"
        type="search"
        id="form1"
        placeholder="Search for Books"
        onChange={(event) => setQuery(event.target.value)}
      />
    </center>
  );
}

export default SearchBar;
