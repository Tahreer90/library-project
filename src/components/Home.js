import React, { useState } from "react";
import MemberList from "./MemberList";
import BookList from "./BookList";
import { Stack, Button } from "react-bootstrap";
import BookModal from "./modals/BookModal";
import MemberModal from "./modals/MemberModal";

function Home() {
  const [isCreated, setCreated] = useState(false);

  const handleClose = () => setCreated(false);
  const handleShow = () => setCreated(true);

  const [isAdded, setAdded] = useState(false);

  const handleShut = () => setAdded(false);
  const handleOpen = () => setAdded(true);

  return (
    <div>
      <h1 className="text">The Book Room Library</h1>

      <Stack direction="horizontal" className="align-items-start">
        <div>
          <h2 className="book-member">Our Members</h2>
          <MemberList />
          <Button variant="primary" onClick={handleShow}>
            Add Member
          </Button>
          <MemberModal isCreated={isCreated} handleClose={handleClose} />
        </div>
        <div>
          <h2 className="book-member">Books List</h2>
          <BookList />
          <Button variant="primary" onClick={handleOpen}>
            Add Book
          </Button>
          <BookModal isAdded={isAdded} handleShut={handleShut} />
        </div>
      </Stack>
    </div>
  );
}

export default Home;
