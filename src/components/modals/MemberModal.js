import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import memberStore from "../../stores/memberStore";

const MemberModal = ({ isCreated, handleClose }) => {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    membership: "",
    currentlyBorrowedBooks: [],
  });
  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
    //console.log(member);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSumit", member);
    memberStore.addMember(member);
    handleClose();
    //console.log(handleSubmit());
  };
  return (
    <>
      <Modal show={isCreated} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Member Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
              />
              <br />
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label>Membership</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="membership"
              onChange={handleChange}
            >
              <option>Select Membership</option>
              <option value="Platinum">Platinum</option>
              <option value="Golden">Golden</option>
              <option value="Silver">Silver</option>
            </Form.Select>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            margin="10px"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MemberModal;
