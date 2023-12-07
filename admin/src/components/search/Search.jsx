import { MdSearch } from "react-icons/md";
import "./search.css";

const Search = ({ placeholder, setInput }) => {
  return (
    <div className="search-container">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
