import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";

export default function Login() {
    return (
        <Link to={routes.USER}>User</Link>
    )
}