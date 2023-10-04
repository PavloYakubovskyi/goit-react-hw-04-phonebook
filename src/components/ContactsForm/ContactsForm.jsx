import { Form, Formik } from "formik";
import { BtnSubmit, FormLabel, Input, LabelSpan } from "./ContactsForm.styled";

const initialValues = {
  name: "",
  number: "",
  id: "",
};

const ContactForm = ({ addContact }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt.currentTarget.name.value);
    const form = evt.currentTarget;
    addContact(form.name.value, form.number.value);

    form.reset();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          <LabelSpan>Name</LabelSpan>
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
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
          />
        </FormLabel>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </Form>
    </Formik>
  );
};

export default ContactForm;
