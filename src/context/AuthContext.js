import React, { createContext, useState, useContext } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS } from '../constant/Messages';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) ? JSON.parse(localStorage.getItem('user')) : null);

  const signup = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isDuplicate = existingUsers.some(user => user.email === data.email);
    if (isDuplicate) {
      toast.error(SIGNUP_ERROR);
    } else {
      data.password = CryptoJS.AES.encrypt(data.password, 'niyti@124').toString();
      existingUsers.push(data);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      toast.success(SIGNUP_SUCCESS);
      setUser(data);
    }
  };

  const login = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => {
      const decryptedPassword = CryptoJS.AES.decrypt(user.password, 'niyti@124').toString(CryptoJS.enc.Utf8);
      return user.email === data.email && decryptedPassword === data.password;
    });
    if (user) {
      setUser(user);
      localStorage.setItem('isLoggedIn', true);
      toast.success(LOGIN_SUCCESS);
    } else {
      toast.error(LOGIN_ERROR);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('users');
    localStorage.removeItem('isLoggedIn');
    toast.success(LOGOUT_SUCCESS);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
