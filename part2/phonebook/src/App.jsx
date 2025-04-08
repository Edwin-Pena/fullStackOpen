import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contacts from "./services/contacts";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [notification, setNotificacion] = useState(null);

  useEffect(() => {
    contacts.getAll().then((initialContacts) => setPersons(initialContacts));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNotificacion={setNotificacion}
      />
      <h2>Numbers</h2>
      <Persons
        arrPerson={persons}
        filterValue={filterValue}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
