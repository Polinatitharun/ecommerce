import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const AuthProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const contextValue = useContext(AuthContext);

  const logout = () => {
    contextValue.logout();
    navigate('/login');
  };

  const authContextValue = {
    ...contextValue,
    logout,
    login: contextValue.login // Add this line to include login
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviderWithNavigate;
