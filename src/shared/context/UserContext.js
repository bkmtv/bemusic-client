import { createContext, useState, useEffect } from "react";

import { URI } from "@constants/api";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const refreshUser = () => {
      axios
        .get(URI + "auth/user", {
          headers: { token: localStorage.getItem("token") },
        })
        .then(({ data }) => {
          if (data.error) {
            setUser({ isLoggedIn: false, ...data });
          } else {
            setUser({ isLoggedIn: true, ...data });
          }
        });
    };
    refreshUser();
  }, [setUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
