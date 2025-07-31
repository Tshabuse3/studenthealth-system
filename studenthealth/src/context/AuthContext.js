import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  const login = (userRole) => {
    setLoggedIn(true);
    setRole(userRole);
  };

  const logout = () => {
    setLoggedIn(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
