import contacts from "../services/contacts";

const Persons = ({ arrPerson, filterValue, setPersons, setNotificacion }) => {
  const filterNames = arrPerson.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const deleteContact = (person) => {
    if (
      window.confirm(
        `Are you sure you want to remove ${person.name} from your Phonebook?`
      )
    ) {
      contacts.deletePerson(person.id).then(() => {
        setPersons(arrPerson.filter((p) => p.id !== person.id));
        setNotificacion({
          message: `${person.name} was deleted`,
          result: "error",
        });
        setTimeout(() => setNotificacion(null), 4000);
      });
    } else {
      console.log(`the contact ${person.name} was not deleted`);
    }
  };
  return (
    <>
      {filterNames.map((person) => (
        <div key={person.name}>
          {`${person.name} ${person.number}`}{" "}
          <button onClick={() => deleteContact(person)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
