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
        <div className="px-3">
        <Link to={`/profile/${user.id}`}>{user.username}</Link>
        <button className="px-3" onClick={Logout}><FormattedMessage id="app.auth.logout" /></button>
        </div>
        </>
    )
}