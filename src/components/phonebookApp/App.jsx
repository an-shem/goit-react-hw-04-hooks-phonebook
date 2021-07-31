import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { apiStorage } from '../../apiStorage.js';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import { Container, Section, Title } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(
    () => apiStorage.getDataStorage('contacts') ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    apiStorage.setDataStorage('contacts', contacts);
  }, [contacts]);

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleSubmit = (name, number) => {
    if (nameVerification(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    setContacts(prev => [...prev, newContact]);
  };

  const nameVerification = name => {
    return contacts.find(contact => name === contact.name);
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={handleSubmit} />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter filter={filter} handleChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
}
