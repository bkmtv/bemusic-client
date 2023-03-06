import { useContext } from "react";

import { UserContext } from "@context/UserContext";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function Logout() {
    localStorage.removeItem("token");
    setUser({ isLoggedIn: false, username: "" });
    navigate("/");
  }

  return (
    <div className="hstack">
      <Link className="header__flex p-2" to={`/profile/${user.id}`}>
        <Icon.FilePerson />
        <strong className="mx-1">{user.username}</strong>
      </Link>
      <button className="header__flex p-2" onClick={Logout}>
        <Icon.BoxArrowRight />
        <span className="mx-1">
          <FormattedMessage id="app.auth.logout" />
        </span>
      </button>
    </div>
  );
}
