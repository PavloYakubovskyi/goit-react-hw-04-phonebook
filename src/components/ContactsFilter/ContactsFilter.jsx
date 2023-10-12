import { FilterInput, FilterLabel, FilterSpan } from './ContactsFilter.styled';

const ContactsFilter = ({ filter, filterContacts }) => {
  const handleChange = e => {
    filterContacts(e.target.value);
  };

  return (
    <div>
      <FilterLabel htmlFor="filter">
        <FilterSpan>Find contacts by name</FilterSpan>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </FilterLabel>
    </div>
  );
};

export default ContactsFilter;
