import { FilterInput, FilterLabel, FilterSpan } from "./ContactsFilter.styled";

const ContactsFilter = ({ inputValue, handleChange }) => {
  return (
    <FilterLabel>
      <FilterSpan>Find contacts by name</FilterSpan>
      <FilterInput type="text" value={inputValue} onChange={handleChange} />
    </FilterLabel>
  );
};

export default ContactsFilter;
