import * as Icon from "react-bootstrap-icons";

export default function Search() {
  return (
    <div className="ms-auto">
      <form role="search">
          <input type="search" placeholder="Search"/>
          <button type="submit"><Icon.Search /></button>
      </form>
    </div>
  )
}