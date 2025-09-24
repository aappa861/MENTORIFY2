// src/Context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const [email, setEmail] = useState(null);
  const [user, setUser] = useState(null);   // ✅ new state for full user object

  // Load from localStorage on refresh
  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    const savedAccountType = localStorage.getItem("accountType");
    const savedEmail = localStorage.getItem("email");
    const savedUser = localStorage.getItem("user");

    if (savedToken) setToken(savedToken);
    if (savedAccountType) setAccountType(savedAccountType);
    if (savedEmail) setEmail(savedEmail);
    if (savedUser) setUser(JSON.parse(savedUser));  // ✅ restore full user
  }, []);

  const login = (token, accountType, email, userObj) => {
    setToken(token);
    setAccountType(accountType);
    setEmail(email);
    setUser(userObj);  // ✅ save user

    localStorage.setItem("authToken", token);
    localStorage.setItem("accountType", accountType);
    localStorage.setItem("email", email);
    localStorage.setItem("user", JSON.stringify(userObj)); // ✅ persist user
  };

  const logout = () => {
    setToken(null);
    setAccountType(null);
    setEmail(null);
    setUser(null);

    localStorage.removeItem("authToken");
    localStorage.removeItem("accountType");
    localStorage.removeItem("email");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ token, accountType, email, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
