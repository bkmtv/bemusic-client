import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import ToggleLocale from "./ToggleLocale";
import ToggleTheme from "./ToggleTheme";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import "./Header.css";

function Header() {
  return (
    <header className="hstack gap-4">
      <h3><Icon.Collection /> <FormattedMessage id="app.header.logo" /></h3>
      <Search />
      <Login />
      <Register />
      <ToggleLocale />
      <ToggleTheme />
    </header>
  )
}

export default Header;