import { createContext, useReducer } from "react";
import { authReducer } from "../Reducers/AuthReducer";
import { AuthActionType } from "../Reducers/types";

interface AuthContextProviderProps {
  children: React.ReactNode;
}
interface AuthContextDefaultProps {
  isAuthenticated: boolean;
  username: string;
  onToggleAuth: (username: string) => void;
}
const authContextDefault: AuthContextDefaultProps = {
  isAuthenticated: false,
  username: "Guess",
  onToggleAuth: () => {},
};
export const AuthContext = createContext(authContextDefault);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, authContextDefault);
  const onToggleAuth = (username: string) => {
    if (username === "")
      dispatch({
        type: AuthActionType.TOGGLE_AUTH,
        payload: { username: "Guess" },
      });
    else dispatch({ type: AuthActionType.TOGGLE_AUTH, payload: { username } });
  };
  const authContextValue = { ...authState, onToggleAuth };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
