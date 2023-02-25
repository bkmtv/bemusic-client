import { useContext } from "react";

import { UserContext } from "@context/UserContext";
import classNames from "classnames";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import ToggleLocale from "./ToggleLocale";
import ToggleTheme from "./ToggleTheme";
import User from "./User";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid p-0">
        <Link to={"/"}>
          <div className={styles.logo}>
            <Icon.Collection /> <FormattedMessage id="app.header.logo" />
          </div>
        </Link>
        <button
          className={classNames("navbar-toggler", styles.toggler)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={styles.icon}>
            <Icon.List />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!user.isLoggedIn ? (
            <>
              <Login />
              <Register />
            </>
          ) : (
            <User />
          )}
          <Search />
          <ToggleLocale />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}

export default Header;
