import React from "react";
import { Modal, Button } from "react-bootstrap";

const BookModal = ({ isAdded, handleShut }) => {
  return (
    <>
      <Modal show={isAdded} onHide={handleShut}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShut}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShut}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookModal;
