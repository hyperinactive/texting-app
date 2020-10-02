import React, { useState } from 'react';
import {
  Tab,
  Nav,
  Button,
  Modal,
} from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewConversationModal from './NewConversationModal';
import NewContactModal from './NewContactModal';

// enums for the active tabs
const CONVERSATION_KEY = 'conversation';
const CONTACT_KEY = 'contacts';

// eslint-disable-next-line react/prop-types
function Sidebar({ id }) {
  // set the active tab hook
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  // monitor the key to find out which one is pressed
  // if === CONVERSATION_KEY -> true, else -> false

  // modal closed when we start the app
  const [modalOpen, setModalOpen] = useState(false);

  // a function to set the modal to false
  const closeModal = () => {
    setModalOpen(false);
  };

  const conversationOpen = activeKey === CONVERSATION_KEY;
  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      {/* on select set the active key to the other one
       * active key initialy -> CONVERSATION_KEY
       * setActiveKey -> switches the event keys
       */}
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-centered">
          <Nav.Item>
            { /* eventKeys used for switching between different tabs */ }
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your id is:
          <span className="text-muted">{id}</span>
        </div>
        {/*
        * if the convo is open show convo button else contact
        * upon clicking the button we should see the modal -> setModalOpen(true)
        */}
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New
          {conversationOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>
      {/* modal open variable and closedModal function */}
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen
          ? <NewConversationModal closeModal={closeModal} />
          : <NewContactModal closeModal={closeModal} />}
      </Modal>
    </div>
  );
}

export default Sidebar;
