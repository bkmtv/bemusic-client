import "./Header.css";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import ToggleLocale from "./ToggleLocale";
import ToggleTheme from "./ToggleTheme";
import User from "./User";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../shared/context/UserContext";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
          <h3 className="mx-2"><Icon.Collection /> <FormattedMessage id="app.header.logo" /></h3>
        </Link>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!user.isLoggedIn ?
          <><Login />
          <Register /></> :
          <User />
          }
          <Search />
          <ToggleLocale />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}

export default Header;