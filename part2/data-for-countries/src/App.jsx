import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";
import getInfo from "./services/countries";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getInfo().then((searchedCountries) => setCountries(searchedCountries));
  }, []);

  return (
    <div>
      <Search
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Countries countries={countries} value={searchValue} />
    </div>
  );
};

export default App;
