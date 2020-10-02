import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContactsFunction } from '../context/ContactsProvider';

function Contacts() {
  const { contacts } = useContactsFunction();

  return (
    // make a list group
    <ListGroup variant="flush">
      {/* map through the contacts and print them */}
      {contacts.map((contact) => (
        // each item needs a key
        <ListGroup.Item key={contact.id}>
          {/* print the names */}
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Contacts;
