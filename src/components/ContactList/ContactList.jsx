import PropTypes from "prop-types";

const ContactList = ({contacts, onDeleteContact}) => {
<ul>{contacts.map(contact => 
  <li key={contact.id}>
    <p>{contact.name}: {contact.number}</p>
    <button onClick={() => onDeleteContact(contact.id)}>DELETED</button>
  </li>)}
</ul>
}


export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  }