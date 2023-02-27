import { useEffect, useState } from "react";

import { URI } from "@constants/api";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";

import SearchMini from "./SearchMini";

export default function Search() {
  const [items, setItems] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(URI + "item/search").then((response) => {
      setItems(response.data);
    });
    axios.get(URI + "comment/").then((response) => {
      setComments(response.data);
    });
  }, []);

  const data = [];

  items.forEach((item) => {
    const commentsValue = comments
      .filter((comment) => comment.ItemId === item.id)
      .map((comment) => comment.commentBody)
      .join(", ");

    data.push({
      id: item.id,
      name: item.name,
      commentsValue,
    });
  });

  return (
    <div className="ms-auto">
      <form className="d-flex" role="search">
        <SearchMini data={data} />
        <button type="submit">
          <Icon.Search />
        </button>
      </form>
    </div>
  );
}
