import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleValueChange = (event, setter) => {
    setter(event.target.value);
  };

  const existingValue = (newVal, property) =>
    persons.some((person) => newVal === person[property]);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const existingName = existingValue(newName, "name");
    const existingNumber = existingValue(newNumber, "number");

    existingName
      ? alert(`${newName} is already added to phonebook`)
      : existingNumber
      ? alert(
          `There is already a person registered with the number ${newNumber}`
        )
      : setPersons(persons.concat(newPerson));

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => handleValueChange(e, setNewName)}
            required
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={(e) => handleValueChange(e, setNewNumber)}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
