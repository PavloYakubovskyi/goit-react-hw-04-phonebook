import { AiFillDelete } from 'react-icons/ai';
import { ContactBtn, ContactLi } from '../ContactsList/ContactsList.styled';

const ContactsItem = ({ contacts, deleteContact }) => {
  return contacts.map(item => {
    return (
      <ContactLi key={item.id}>
        <span>
          {item.name}: {item.number}
        </span>
        <ContactBtn type="button" onClick={() => deleteContact(item.name)}>
          <AiFillDelete />
        </ContactBtn>
      </ContactLi>
    );
  });
};

export default ContactsItem;
