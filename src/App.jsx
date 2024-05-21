import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState } from "react";
import data from "./data/contactData.json";
import { nanoid } from "nanoid";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [users, setUsers] = useLocalStorage("users", data);

  const [inputValue, setInputValue] = useState("");

  const getFilterData = () => {
    return users.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const filteredData = getFilterData();

  const handleAddContact = (newContactData) => {
    const newContact = {
      id: nanoid(),
      name: newContactData.name,
      number: newContactData.number,
    };
    setUsers((prevUsers) => [newContact, ...prevUsers]);
  };

  const handleDeleteContact = (id) => {
    setUsers((prev) => prev.filter((users) => users.id !== id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />
        <SearchBox setInputValue={setInputValue} />
        <ContactList
          handleDeleteContact={handleDeleteContact}
          users={filteredData}
        />
      </div>
    </>
  );
}

export default App;
