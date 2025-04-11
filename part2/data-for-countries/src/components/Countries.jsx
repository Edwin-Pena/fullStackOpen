import Country from "./Country";

const Countries = ({ value, countries }) => {
  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value.toLowerCase())
  );

  if (value === "") {
    return null;
  } else if (filterCountries.length > 10) {
    return <div>too many matches, specify another filter</div>;
  } else if (filterCountries.length === 1) {
    return <Country filterCountry={filterCountries} />;
  }

  return (
    <div>
      {filterCountries.map((country) => (
        <div key={country.cca2}>{country.name.common}</div>
      ))}
    </div>
  );
};

export default Countries;
