const Persons = ({ arrPerson, filterValue }) => {
  const filterNames = arrPerson.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <>
      {filterNames.map((person) => (
        <div key={person.name}>{`${person.name} ${person.number}`}</div>
      ))}
    </>
  );
};

export default Persons;
