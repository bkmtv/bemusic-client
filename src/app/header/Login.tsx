import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";

export default function Login() {
    return (
        <Link to={routes.SIGNIN}>
            <button type="button"><FormattedMessage id="app.header.sign-in" /></button>
        </Link>
    )
}