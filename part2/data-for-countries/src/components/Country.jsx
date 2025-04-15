const Country = ({ country, weatherObj }) => {
  const [weather] = weatherObj.weather;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>{`Capital: ${country.capital}`}</div>
      <div>{`Area: ${country.area}`}</div>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather in {country.capital}</h2>
      <div>Temperature {weatherObj.main.temp} Celsius</div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt=""
      />
      <div>Wind {weatherObj.wind.speed} m/s</div>
    </div>
  );
};

export default Country;
