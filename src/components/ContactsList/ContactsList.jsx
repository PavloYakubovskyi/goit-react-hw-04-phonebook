import ContactsItem from '../ContactsItem/ContactsItem';
import { ContactUl } from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <>
      {/* <Title>Contacts</Title> */}
      {contacts.length ? (
        <ContactUl>
          {contacts.map(contact => (
            <ContactsItem
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
            />
          ))}
        </ContactUl>
      ) : (
        <>contacts is empty</>
      )}
    </>
  );
};

export default ContactsList;
