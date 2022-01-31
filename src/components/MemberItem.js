import React from "react";
import memberStore from "../stores/memberStore";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function MemberItem(props) {
  const member = props.member;
  return (
    <div className="centerized">
      <Card border="info" style={{ width: "18rem", height: "9.5rem" }}>
        <Card.Header>{member.membership} Membership</Card.Header>
        <Card.Body>
          <Card.Title>
            {/* <Link to={`/members/${member.slug}`}> */}
            {member.firstName} {member.lastName}
            {/* </Link> */}
          </Card.Title>
          <Card.Text>
            I have {member.currentlyBorrowedBooks.length} books borrowed from
            the library.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
