import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { UserContext } from "../../shared/context/UserContext";
import UsersList from "../admin/UsersList";

export default function Home() {
    const { user } = useContext(UserContext);

    return (
        <>
        <div className="h5 py-5"><FormattedMessage id="app.user.hello" />, {user.username}</div>
        <UsersList />
        </>
    )
}