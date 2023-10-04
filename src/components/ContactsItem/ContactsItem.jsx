import { AiFillDelete } from "react-icons/ai";
import { ContactBtn, ContactLi } from "../ContactsList/ContactsList.styled";

const ContactsItem = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;
  return (
    <>
      <ContactLi key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <ContactBtn onClick={() => deleteContact(id)}>
          <AiFillDelete />
        </ContactBtn>
      </ContactLi>
    </>
  );
};

export default ContactsItem;
