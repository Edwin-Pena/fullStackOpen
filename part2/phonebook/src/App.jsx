import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const handleValueChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={filterValue}
        onChange={(e) => handleValueChange(e, setFilterValue)}
      />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        handleValueChange={handleValueChange}
      />
      <h2>Numbers</h2>
      <Persons arrPerson={persons} filterValue={filterValue} />
      <div>debug: {filterValue}</div>
    </div>
  );
};

export default App;
