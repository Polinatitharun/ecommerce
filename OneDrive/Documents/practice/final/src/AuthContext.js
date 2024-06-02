import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
 const navigate=useNavigate();
  const signup = ({ username, email, password }) => {
    const newUser = { username, email, password };
    setUsers([...users, newUser]);
  };

  const login = ({ email, password }) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('./Login')

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
