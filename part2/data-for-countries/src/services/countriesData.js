import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const api_key = import.meta.env.VITE_SOME_KEY;

const getInfo = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const weatherInfo = (cityName) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`
  );
  return request.then((response) => response.data);
};

export default { getInfo, weatherInfo };
