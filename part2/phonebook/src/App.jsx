import { useState } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleValueChange = (event, setter) => {
    setter(event.target.value);
  };

  const filterNames = persons.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  );

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
      <Filter
        value={filterValue}
        onChange={(e) => handleValueChange(e, setFilterValue)}
      />
      <h3>Add a new</h3>
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
      {filterNames.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
      <div>debug: {filterValue}</div>
    </div>
  );
};

export default App;
