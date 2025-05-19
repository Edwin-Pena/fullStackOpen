import contacts from "../services/contacts";
import { useState } from "react";

const PersonForm = ({ persons, setPersons, setNotificacion }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const existingName = persons.some(
      (person) => newName.toLowerCase() === person.name.toLowerCase()
    );

    const existingNumber = persons.some(
      (person) => newNumber === person.number
    );

    if (existingName) {
      const contact = persons.find(
        (p) => p.name.toLowerCase() === newName.toLowerCase()
      );
      const changeContact = { ...contact, number: newNumber };
      const id = contact.id;

      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        contacts
          .updateNumber(id, changeContact)
          .then((returnedContact) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedContact
              )
            );
            setNotificacion({
              message: `${returnedContact.name} was updated`,
              result: "success",
            });
            setTimeout(() => setNotificacion(null), 4000);
          })
          .catch(() => {
            setNotificacion({
              message: `Information of ${contact.name} has already been removed from server`,
              result: "error",
            });
          });
      }
    } else if (existingNumber) {
      alert(
        `There is already a person registered with the number ${newNumber}`
      );
      return;
    } else {
      const newPerson = { name: newName, number: newNumber };
      contacts.create(newPerson).then((returnedContact) => {
        setPersons(persons.concat(returnedContact));
        setNotificacion({
          message: `${returnedContact.name} was succesfully added`,
          result: "success",
        });
        setNewName("");
        setNewNumber("");
        setTimeout(() => setNotificacion(null), 4000);
      });
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
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
