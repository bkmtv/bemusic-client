import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <Link to={"/signin"}>
            <button type="button"><FormattedMessage id="app.header.sign-in" /></button>
        </Link>
    )
}