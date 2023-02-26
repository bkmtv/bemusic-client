import { useState } from "react";

import { Link } from "react-router-dom";

import "./SearchBar.css";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="form-control"
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="result">
          {filteredData.slice(0, 15).map((value) => {
            return (
              <Link
                key={value.id}
                className="dataItem"
                to={`/item/${value.id}`}
                onClick={clearInput}
              >
                <p>{value.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
