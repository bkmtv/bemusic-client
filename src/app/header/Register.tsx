import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";

export default function Register() {
    return (
        <Link to={routes.SIGNUP}>
            <button type="button"><FormattedMessage id="app.header.sign-up" /></button>
        </Link>
    )
}