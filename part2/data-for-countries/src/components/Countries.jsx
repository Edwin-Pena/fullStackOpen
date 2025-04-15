import { useEffect, useState } from "react";
import Country from "./Country";
import countriesData from "../services/countriesData";

const Countries = ({ value, countries }) => {
  const [countryInfo, setcountryInfo] = useState(null);
  const [weatherValue, setWeatherValue] = useState(null);

  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value.toLowerCase())
  );

  const showCountry = (id) => {
    const countrySelected = filterCountries.find((n) => n.cca2 === id);
    setcountryInfo(countrySelected);
  };

  useEffect(() => {
    if (filterCountries.length === 1) {
      const [country] = filterCountries;
      setcountryInfo(country);
    } else if (value === "") {
      setcountryInfo(null);
    }
  }, [filterCountries, value]);

  useEffect(() => {
    if (countryInfo) {
      const nameCountry = countryInfo.name.common;
      console.log("effect shido", nameCountry);
      countriesData
        .weatherInfo(nameCountry)
        .then((weatherRes) => setWeatherValue(weatherRes));
    }
  }, [countryInfo]);

  if (value === "") {
    return null;
  } else if (filterCountries.length > 10) {
    return <div>too many matches, specify another filter</div>;
  }

  return (
    <div>
      {countryInfo && weatherValue ? (
        <Country country={countryInfo} weatherObj={weatherValue} />
      ) : (
        filterCountries.map((country) => (
          <div key={country.cca2}>
            {country.name.common}{" "}
            <button onClick={() => showCountry(country.cca2)}>Show</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Countries;
