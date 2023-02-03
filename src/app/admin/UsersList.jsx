import axios from "axios";
import { useEffect, useState } from "react";

export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const getUsers = async () => {
        await axios.get("http://localhost:5000/user/", { 
          headers: {token: localStorage.getItem("token")}
        })
          .then((data) => {
              setUsers(data.data.map(user => ({ 
                username: user.username 
              })));
            }
          )
        }
        getUsers();
      }, []);
    
      return (
        <div>
          <h3>Список пользователей</h3>
          {users.map((user, key) => (
            <p key={key}>{user.username}</p>
        ))}</div>
        )
  }