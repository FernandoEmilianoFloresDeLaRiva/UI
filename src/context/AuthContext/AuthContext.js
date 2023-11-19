import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export const AuthContext = createContext();

export default function ProviderAuth({ children }) {
  const initialState = {
    isAuth: false,
    user: {},
    token: null,
  };
  const objectState =
    JSON.parse(window.localStorage.getItem("userLog")) || initialState;

  const [objectAuth, dispatch] = useReducer(AuthReducer, objectState);
  return (
    <AuthContext.Provider value={{ objectAuth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
