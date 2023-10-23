import axios from "axios";
import Cookies from "universal-cookie";

import { sessionExpiredDialog } from "../utils/dialog";
import { localStorageName } from "../constants/index";

const cookies = new Cookies();

const logout = () => {
  localStorage.removeItem(localStorageName.accessToken);
  localStorage.removeItem(localStorageName.expiresAt);
  cookies.remove("sid", { path: "/" });
  window.location.pathname = "/";
};
export const api = (options) => {
  return axios({
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        localStorageName.accessToken
      )}`,
    },
    ...options,
  })
    .then((res) => {
      return new Promise((resolve) => resolve(res));
    })
    .catch((error) => {
      console.log(error);
      console.log("response", error.response);
      if (error.response.status === 401) {
        sessionExpiredDialog().then((result) => {
          if (result.isConfirmed) {
            logout();
          }
        });
      }
      return new Promise((resolve, reject) => reject(error));
    });
};
