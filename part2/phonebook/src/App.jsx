import { useState } from "react";
import Number from "./components/Number";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const newPerson = { name: newName };
    const existingName = persons.some((person) => newName === person.name);

    existingName
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newPerson));

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Number key={person.name} name={person.name} />
      ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
