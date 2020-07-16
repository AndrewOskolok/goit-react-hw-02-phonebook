import styles from "./App.module.css";
import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import AllContacts from "./components/AllContacts/AllContacts";
import FilterContacts from "./components/FilterContacts/FilterContacts";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    { id: "id-5", name: "Andrew Oskolok", number: "423-44-92" },
  ]);
  const [filter, setFilter] = useState("");

  const inputFilter = ({ target }) => {
    setFilter(target.value.toLowerCase());
  };

  const deleteContact = (id) => {
    setContacts((state) => state.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <AddContact setContacts={setContacts} contacts={contacts} />

      <h2>Contacts</h2>
      <FilterContacts inputFilter={inputFilter} />
      <AllContacts
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
