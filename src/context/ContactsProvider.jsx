import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContext = React.createContext();
// basically, renamed useContext function
export const useContactsFunction = () => useContext(ContactsContext);

// take all components as children
// eslint-disable-next-line import/prefer-default-export, react/prop-types
export function ContactsProvider({ children }) {
  // useLocalStorage is the hook created to store stuff into local storage
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContact = (id, name) => {
    // append the latest contact to the already existing ones
    setContacts((prevContacts) => [...prevContacts, { id, name }]);
  };

  return (
    // return a provider with the following info: contacts created and a function to make them
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
