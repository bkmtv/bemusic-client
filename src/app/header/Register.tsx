import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Link to={"/signup"}>
      <button type="button">
        <FormattedMessage id="app.header.sign-up" />
      </button>
    </Link>
  );
}
