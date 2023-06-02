import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [logoutTimer, setLogoutTimer] = useState(null);

  const userIsLoggedIn = !!token;

  const calculateRemainingTime = (expirytime) => {
    const currentTime = new Date().getTime();
    const remainingTime = expirytime - currentTime;
    return remainingTime;
  };

  const logInHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);

    const expireTime = new Date().getTime() + 5 * 60 * 5000;
    localStorage.setItem("expiry", expireTime.toString());

    const remainingTime = calculateRemainingTime(expireTime);

    setLogoutTimer(setTimeout(logoutHandler, remainingTime));
  };

  useEffect(() => {
    if (token && logoutTimer) {
      clearInterval(logoutTimer);
    }
    if (token) {
      const expirationTime = Number(localStorage.getItem("expiry"));
      const remainingTime = calculateRemainingTime(expirationTime);
      setLogoutTimer(setTimeout(logoutHandler, remainingTime));
    }
  }, [token, logoutTimer]);

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
