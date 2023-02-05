import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import { URI } from "../../shared/constants/api";
import UsersList from "../admin/UsersList";

export default function Profile() {
    const { id } = useParams();
    const [userObject, setUserObject] = useState({id: id, username: "", isAdmin: ""});
    const [userCollections, setUserCollections] = useState([]);
  
    useEffect(() => {
        axios.get(URI + "profile/user/" + id).then((response) => {
            setUserObject(response.data);
        })
        axios.get(URI + "collection/byuserId/" + id).then((response) => {
            setUserCollections(response.data);
        })
    }, [id]);

    return (
        <>
        <div className="h5 pt-5 pb-3"><FormattedMessage id="app.user.hello" />, {userObject.username}</div>
        <div className="py-4">My collections</div>

        <table className="table" id="custom-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col"><FormattedMessage id="app" />Title</th>
                <th scope="col"><FormattedMessage id="app" />Description</th>
                <th scope="col"><FormattedMessage id="app" />Topic</th>
                <th scope="col"><FormattedMessage id="app" />Action</th>
              </tr>
            </thead>
            <tbody>
              {userCollections.map((collection, key) => (
              <tr key={key}>
                <th scope="row">{collection.id}</th>
                <td>{collection.title}</td>
                <td>{collection.description}</td>
                <td>{collection.topic}</td>
                <td><button>Delete</button></td>
              </tr>
              ))}
            </tbody>
          </table>

        {userObject.isAdmin ? <UsersList /> : <></>}
        </>
    )
}