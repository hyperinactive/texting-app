import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import { Button } from 'react-bootstrap';

// enums for the active tabs
const CONVERSATION_KEY = 'conversation';
const CONTACT_KEY = 'contacts';

function Sidebar({ id }) {
  // set the active tab hook
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  // monitor the key to find out which one is pressed
  // if === CONVERSATION_KEY -> true, else -> false
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
            {/* eventKeys used for switching between different tabs*/}
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
          Your id is: <span className="text-muted">{id}</span>
        </div>
        {/* if the convo is open show convo button else contact */}
        <Button className="rounded-0">
          New {conversationOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>
    </div>
  );
}

export default Sidebar;
