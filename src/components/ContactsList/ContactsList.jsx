import ContactsItem from '../ContactsItem/ContactsItem';
import { ContactUl } from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContactUl>
      <ContactsItem contacts={contacts} deleteContact={deleteContact} />
    </ContactUl>
  );
};

export default ContactsList;
