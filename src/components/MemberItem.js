import React from "react";
import memberStore from "../stores/memberStore";
import { Card } from "react-bootstrap";

export default function MemberItem(props) {
  const member = props.member;
  return (
    <div className="centerized">
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Header>{member.firstName}</Card.Header>
        <Card.Body>
          <Card.Title>{member.membership} membership</Card.Title>
          <Card.Text>
            I have {member.currentlyBorrowedBooks} books borrowed from the
            library.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
