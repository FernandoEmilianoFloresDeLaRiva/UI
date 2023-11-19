import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export const AuthContext = createContext();

export default function ProviderAuth({ children }) {
  const initialState = {
    isAuth: false,
    user: {},
    token: window.localStorage.getItem("token") || null,
  };
  const [objectAuth, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ objectAuth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
