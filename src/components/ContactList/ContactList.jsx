import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact, children }) => {
  return (
    <div className={s.contacts}>
      <h2 className={s.title}>Contacts</h2>
      {children}
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              <Contact
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
                contactId={id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContactList;
