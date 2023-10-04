import { Component } from "react";
import "./App.styled.jsx";
import ContactForm from "./components/ContactsForm/ContactsForm";
import ContactsList from "./components/ContactsList/ContactsList";
import { nanoid } from "nanoid";
import ContactsFilter from "./components/ContactsFilter/ContactsFilter";
import { Container, SubTitle, Title } from "./App.styled.jsx";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem("contacts");
    console.log("stringifiedContacts:", stringifiedContacts);
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
    this.setState({
      contacts: parsedContacts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // якщо довжини масивів між рендерами відрізняються, це каже про те, що зміна відбулася
    if (this.state.contacts.length !== prevState.contacts.length) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem("contacts", stringifiedContacts);
    }
  }

  addContact = (name, number) => {
    // console.log(name);
    if (
      this.state.contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = { id: nanoid(), name, number };
    console.log(newContact);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <ContactsFilter
          inputValue={this.state.filter}
          handleChange={this.handleFilterChange}
        />
        <ContactsList
          contacts={this.filteredContacts()}
          deleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
