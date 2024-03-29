// import { Form, Formik } from 'formik';
import { BtnSubmit, FormLabel, Input, LabelSpan } from './ContactsForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = () => {
    const id = nanoid();
    addContact({ name, number, id });
  };

  return (
    <form onSubmit={onSubmit}>
      <FormLabel htmlFor="name">
        <LabelSpan>Name</LabelSpan>
        <Input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        <LabelSpan>Number</LabelSpan>
        <Input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FormLabel>
      <div>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </div>
    </form>
  );
};

export default ContactForm;
