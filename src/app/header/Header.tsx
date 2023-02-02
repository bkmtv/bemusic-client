import "./Header.css";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import ToggleLocale from "./ToggleLocale";
import ToggleTheme from "./ToggleTheme";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";

function Header() {
  return (
    <header className="hstack gap-4">
      <Link to={routes.HOME}>
        <h3 className="me-3"><Icon.Collection /> <FormattedMessage id="app.header.logo" /></h3>
      </Link>
      <Login />
      <Register />
      <Search />
      <ToggleLocale />
      <ToggleTheme />
    </header>
  )
}

export default Header;