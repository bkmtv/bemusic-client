import { useContext, useEffect, useState } from "react";

import { URI } from "@constants/api";
import { UserContext } from "@context/UserContext";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import "./UsersList.css";

export default function UsersList() {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(URI + "profile").then((response) => {
      setUsers(response.data);
    });
  }, [setUsers]);

  const deleteUser = (id) => {
    axios.delete(URI + "profile/" + id).then(() => {
      setUsers(
        users.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <>
      {user.isAdmin ? (
        <>
          <h5 className="my-4">
            <Icon.PersonFillGear />
            &emsp;
            <FormattedMessage id="app.user.users" />
          </h5>
          <table className="table table-borderless admin__table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">
                  <FormattedMessage id="app.user.users.name" />
                </th>
                <th scope="col">
                  <FormattedMessage id="app.user.users.regdate" />
                </th>
                <th scope="col">
                  <FormattedMessage id="app.user.users.role" />
                </th>
                <th scope="col">
                  <FormattedMessage id="app.user.users.action" />
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <tr key={key}>
                  <th scope="row">{user.id}</th>
                  <td>
                    <Link to={`/profile/${user.id}`}>{user.username}</Link>
                  </td>
                  <td>{user.regDate}</td>
                  <td>
                    {user.isAdmin ? (
                      <FormattedMessage id="app.user.users.admin" />
                    ) : (
                      <FormattedMessage id="app.user.users.user" />
                    )}
                  </td>
                  <td>
                    <button
                      className="admin__button"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      <Icon.Trash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <p className="my-4">
            <FormattedMessage id="app.profile.admin-page" />
          </p>
        </>
      )}
    </>
  );
}
