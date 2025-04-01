import { useState } from "react";

const PersonForm = ({ persons, setPersons, handleValueChange }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const existingValue = (newVal, property) =>
    persons.some(
      (person) => newVal.toLowerCase() === person[property].toLowerCase()
    );

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
          pattern="[^A-Za-z]*"
          title="Please enter numbers"
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
