import * as Icon from "react-bootstrap-icons";

export default function Search() {
  return (
    <div className="ms-auto">
      <form className="d-flex" role="search">
        <input className="form-control" type="search" />
        <button type="submit">
          <Icon.Search />
        </button>
      </form>
    </div>
  );
}
