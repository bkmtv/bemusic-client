import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./UsersList.css";
import * as Icon from "react-bootstrap-icons";
import { URI } from "../../shared/constants/api";
import { Link } from "react-router-dom";

export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get(URI +"profile")
        .then((response) => {
            setUsers(response.data);
          }
        )
      }, [setUsers]);

      const deleteUser = (id) => {
        axios.delete(URI + "profile/" + id).then((response) => {
          setUsers(response.data);
        })
      }
    
      return (
        <div>
          <table className="table" id="custom-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col"><FormattedMessage id="app.user.users.name" /></th>
                <th scope="col"><FormattedMessage id="app.user.users.regdate" /></th>
                <th scope="col"><FormattedMessage id="app.user.users.role" /></th>
                <th scope="col"><FormattedMessage id="app.user.users.action" /></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
              <tr key={key}>
                <th scope="row">{user.id}</th>
                <td><Link to={`/profile/${user.id}`}>{user.username}</Link></td>
                <td>{user.regDate}</td>
                <td>
                  { user.isAdmin ? 
                <FormattedMessage id="app.user.users.admin" /> :
                <FormattedMessage id="app.user.users.user" /> }
                </td>
                <td><button onClick={() => {deleteUser(user.id)}}><Icon.Trash /></button></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }