import "./App.css";
import React from "react";
import MemberList from "./components/MemberList";
import BookList from "./components/BookList";
import { Stack, Button } from "react-bootstrap";
import BookModal from "./components/modals/BookModal";
import MemberModal from "./components/modals/MemberModal";
import { useState } from "react";

function App() {
  const [isCreated, setCreated] = useState(false);

  const handleClose = () => setCreated(false);
  const handleShow = () => setCreated(true);

  const [isAdded, setAdded] = useState(false);

  const handleShut = () => setAdded(false);
  const handleOpen = () => setAdded(true);

  return (
    <div>
      <h1>Librarian Page</h1>
      <Stack direction="horizontal" className="align-items-start">
        <div>
          <h2>Our Members</h2>
          <MemberList />
          <Button variant="primary" onClick={handleShow}>
            Add Member
          </Button>
          <MemberModal isCreated={isCreated} handleClose={handleClose} />
        </div>
        <div>
          <h2>Books List</h2>
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

export default App;
