import React from "react";
import bookStore from "../stores/bookStore";
import { Card } from "react-bootstrap";

export default function MemberItem(props) {
  const book = props.book;
  return (
    <div className="centerized">
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Header>
          Book Name:
          {book.title}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            Written By:
            {book.author}
          </Card.Title>
          <Card.Text>Genre: {book.genre}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
