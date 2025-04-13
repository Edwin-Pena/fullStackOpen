import { useState } from "react";
import Country from "./Country";

const Countries = ({ value, countries }) => {
  const [countryValue, setCountryValue] = useState(null);

  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value.toLowerCase())
  );

  const showCountry = (id) => {
    const countrySelected = filterCountries.find((n) => n.cca2 === id);
    setCountryValue(countrySelected);
  };

  if (value === "") {
    return null;
  } else if (filterCountries.length > 10) {
    return <div>too many matches, specify another filter</div>;
  } else if (filterCountries.length === 1) {
    const [country] = filterCountries;
    return <Country country={country} />;
  }

  return (
    <div>
      {filterCountries.map((country) => (
        <div key={country.cca2}>
          {country.name.common}{" "}
          <button onClick={() => showCountry(country.cca2)}>Show</button>
        </div>
      ))}
      {countryValue && <Country country={countryValue} />}
    </div>
  );
};

export default Countries;
