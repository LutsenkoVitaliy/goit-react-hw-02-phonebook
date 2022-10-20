import React, { Component } from 'react';

import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    name: '',
    number: ''
  };

  deletedContact = contactId => {
    this.setState(prevState => ({
     contacts: prevState.contacts.filter(contact => contact.id !== contactId)
   }))
  }


  render() {

    return(
    <Container>
    <h1> Phonebook</h1>
    <form>
      <label>Name</label>
      <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required />
      
      <label>Number</label>
      <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
      <button type='submit'>Add Contact</button>
    </form>
    
    <h2>Contacts</h2>
        <ul>{this.state.contacts.map(({id,name,number}) => 
          <li key={id}>
            <p>{name}: {number}</p>
            <button onClick={() => this.deletedContact(id)}>DELETED</button>
          </li>)}</ul>
    </Container>
  )}
}

export default App;