const Search = ({ value, onChange }) => {
  return (
    <div>
      <span>Find countries</span> <input value={value} onChange={onChange} />
    </div>
  );
};

export default Search;
