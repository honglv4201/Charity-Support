import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/AuthReducer";
import axios from "axios";
import { apiUrl, LOCALSTORAGE_TOKEN_KEY } from "./constants";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  // login from token
  const verifyUser = async () => {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
    try {
      const response = await axios.post(`${apiUrl}/auth`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };

  // login user func
  const loginUser = async (loginForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, loginForm);

      if (response.data.success) {
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, response.data.token);
      }
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: true,
          user: response.data.user,
        },
      });
      // console.warn("hong", response);
      return {
        error: false,
        data: response.data,
      };
    } catch (error) {
      // console.log("my err log", error.response);
      return {
        error: true,
        data: error.response.data,
      };
    }
  };

  // log out user
  const logOut = () => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    dispatch({
      type: "SET_AUTH",
      payload: {
        isAuthenticated: false,
        user: null,
      },
    });
  };

  // sign up form
  const signUp = async (signUpForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, signUpForm);
      if (response.data.success) {
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, response.data.token);
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      }
      return response.data;
    } catch (error) {
      console.log("my err log", error);
      return error.response.data;
    }
  };
  // change general info
  const changeInfo = async (infoForm) => {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
    try {
      const response = await axios.put(
        `${apiUrl}/auth/updateprofile`,
        infoForm
      );
      if (response.data.success) {
        await verifyUser();
        return response.data;
      }
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);
  const dataReturn = { loginUser, authState, logOut, signUp, changeInfo };
  return (
    <AuthContext.Provider value={dataReturn}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
