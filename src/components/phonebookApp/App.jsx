import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { apiStorage } from '../../apiStorage.js';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import { Container, Section, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsLocalStorage = apiStorage.getDataStorage('contacts');
    if (contactsLocalStorage) this.setState({ contacts: contactsLocalStorage });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    const { contacts: prevContacts } = prevState;

    if (contacts !== prevContacts) {
      apiStorage.setDataStorage('contacts', contacts);
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (name, number) => {
    if (this.nameVerification(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  nameVerification = name => {
    return this.state.contacts.find(contact => name === contact.name);
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id,
    );
    this.setState({ contacts: newContacts });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter filter={filter} handleChange={this.handleChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
