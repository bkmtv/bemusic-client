import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/context/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    function Logout() {
        localStorage.removeItem("token");
        setUser({isLoggedIn: false, username: ""});
        navigate("/");
    }

    return (
        <>
        <Link to={`/profile/${user.id}`}>{user.username}</Link>
        <button onClick={Logout}><FormattedMessage id="app.auth.logout" /></button>
        </>
    )
}