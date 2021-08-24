import { useState, useEffect } from 'react';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.contacts) ?? initContacts,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.contacts = JSON.stringify(contacts);
  }, [contacts]);

  const addContact = contact => {
    if (findDuplicateContact(contact)) {
      alert(`${contact.name} is already in contacts`);
      return false;
    }
    setContacts(prev => [contact, ...prev]);
    return true;
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(el => el.id !== contactId));
  };

  const filterContact = () => {
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  function findDuplicateContact(contact) {
    const contactToAdd = contact.name.toLowerCase();
    return contacts.find(el => el.name.toLowerCase() === contactToAdd);
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={e => setFilter(e.currentTarget.value)} />
      <ContactList filtredContacts={filterContact()} remove={deleteContact} />
    </Container>
  );
}

export default App;
