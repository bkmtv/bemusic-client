import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./UsersList.css";
import * as Icon from "react-bootstrap-icons";

export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:5000/user/")
        .then((response) => {
            setUsers(response.data);
          }
        )
      }, [setUsers]);

      const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/user/${id}`).then((response) => {
          setUsers(response.data);
        })
      }
    
      return (
        <div>
          <h5><FormattedMessage id="app.user.users" /></h5>
          <table className="table" id="custom">
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
                <td>{user.username}</td>
                <td>{user.regDate}</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
                <td><button onClick={() => {deleteUser(user.id)}}><Icon.Trash /></button></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }