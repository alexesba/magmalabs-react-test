import { createContext, useContext, useState } from "react";
import fakeAuthProvider from "../auth";

let AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // { email: '', password: ''}
  const signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      const values = Object.values(newUser).filter((value) => !!value);
      values.length === 2 && setUser(newUser);
      callback();
    });
  };

  const signout = (callback = () => {}) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
