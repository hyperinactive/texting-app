import React, { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContactsFunction } from '../context/ContactsProvider';

// eslint-disable-next-line react/prop-types
export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  // imported function from the context
  const { createContact } = useContactsFunction();

  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };
  return (
    <>
      {/* closeButton adds an 'X' button at the end, very handy */}
      <Modal.Header closeButton>Create Contact</Modal.Header>
      {/* typing it like Modal.Body -> no need for importing ModalBody from react bootstrap */}
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
