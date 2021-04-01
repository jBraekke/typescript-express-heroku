import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
//import { getUserInfo } from "../utils/authService";

const AuthContext = createContext(null) as any;

const { Provider } = AuthContext;
export const getUserInfo = async () => {
  try {
    return await fetch("api/auth/me").then((response) => response.json());
  } catch (err) {
    return err.response;
  }
};
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null) as any;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserdata = async () => {
      console.log(user);
      if (user === null) {
        setLoading(true);
        const { data } = await getUserInfo();
        if (data) {
          const currentUser = data;
          setUser(currentUser);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    };
    fetchUserdata();
  }, [user]);
  return (
    <Provider
      value={{
        isLoading: loading,
        isAdmin: user?.role === "Admin",
        isLoggedIn: !!user,
        user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
