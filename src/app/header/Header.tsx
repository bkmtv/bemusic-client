import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import ToggleLocale from "./ToggleLocale";
import ToggleTheme from "./ToggleTheme";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";

function Header() {
  return (
    <header className="hstack gap-4">
      <h3><Icon.Collection /> <FormattedMessage id="app.header.logo" /></h3>
      <Search />
      <ToggleLocale />
      <ToggleTheme />
      <Login />
      <Register />
    </header>
  )
}

export default Header;