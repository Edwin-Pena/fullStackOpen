import { useState } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Search
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Countries />
      <div>debug: {searchValue}</div>
    </div>
  );
};

export default App;
