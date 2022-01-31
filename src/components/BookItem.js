import React from "react";
import bookStore from "../stores/bookStore";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function MemberItem(props) {
  const book = props.book;
  return (
    <div className="centerized">
      <Card border="info" style={{ width: "18rem", height: "9.5rem" }}>
        {/* <Link to={`/books/${book.slug}`}> */}
        <Card.Header>{book.title}</Card.Header>
        {/* </Link> */}
        <Card.Body>
          <Card.Title>
            Written By:
            {book.author}
          </Card.Title>
          <Card.Text>Genre: {[book.genre].join(", ")}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
