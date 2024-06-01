import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    user: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data using the token
      // setAuth({ isAuthenticated: true, token, user: fetchedUserData });
    }
  }, []);

  const login = (token, user) => {
    localStorage.setItem('token', token);
    setAuth({ isAuthenticated: true, token, user });
    navigate('/profile');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ isAuthenticated: false, token: null, user: null });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;