import { useEffect, useState } from "react";

import { URI } from "@constants/api";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";

import SearchBar from "./SearchBar";

export default function Search() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URI + "item/search").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="ms-auto">
      <form className="d-flex" role="search">
        <SearchBar data={data} />
        <button type="submit">
          <Icon.Search />
        </button>
      </form>
    </div>
  );
}
