import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();


export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};