import React, { createContext, useEffect, useState } from "react";
import moment from "moment";
import Cookies from "universal-cookie";
import { localStorageName } from "../constants/index";
import axios from "axios";
const AuthenContext = createContext();

export default AuthenContext;

export function ProvideAuth(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const login = (values) => {
    const {
      access_token: accessToken,
      expired_time: expiredTime,
    } = values.data;
    console.log(
      "expiredTime => ",
      expiredTime,
      new Date(expiredTime),
      Date.parse(expiredTime)
    );
    const expDate = new Date(expiredTime);

    localStorage.setItem(localStorageName.accessToken, accessToken);
    localStorage.setItem(localStorageName.expiresAt, expDate);

    // cookies.set("sid", values.headers["set-cookie"], {
    //   path: "/",
    //   expires: expDate,
    // });

    setIsAuthenticated(true);
  };

  const resetProfile = () => {
    axios.get("/k/api/security/logout")
    localStorage.removeItem(localStorageName.accessToken);
    localStorage.removeItem(localStorageName.expiresAt);
    setIsAuthenticated(false);
  };

  const logout = () => {
    resetProfile();
  };

  console.log("isAuthenticated = ", isAuthenticated);

  useEffect(() => {
    const accessToken = localStorage.getItem(localStorageName.accessToken);
    const expiresAt = localStorage.getItem(localStorageName.expiresAt);
    const checkIsAuthenticated = () => {
      if (accessToken) {
        const isExpired = moment(Date.now()).isBefore(new Date(expiresAt));
        if (isExpired) {
          setIsAuthenticated(true);
        } else {
          resetProfile();
        }
      } else {
        resetProfile();
      }
    };
    checkIsAuthenticated();
  }, []);

  return (
    <AuthenContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        isLoading,
        setIsLoading,
        resetProfile,
      }}
    >
      {props.children}
    </AuthenContext.Provider>
  );
}
