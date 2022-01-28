import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import bookStore from "../../stores/bookStore";

const BookModal = ({ isAdded, handleShut }) => {
  const [book, setBook] = useState({
    author: "",
    title: "",
    genre: [],
    availabity: true,
    borrowedBy: [],
  });
  const handleTheChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);
  };
  const handleTheSubmit = (event) => {
    event.preventDefault();
    console.log("handleSumit", book);
    bookStore.addBook(book);
    handleShut();
  };
  return (
    <>
      <Modal show={isAdded} onHide={handleShut}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="author"
                onChange={handleTheChange}
              />
              <br />
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleTheChange}
              />
              <br />
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fantasy, Fiction, Crime etc."
                name="genre"
                onChange={handleTheChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleTheSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookModal;
