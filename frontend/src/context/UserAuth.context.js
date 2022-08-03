import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const userAuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userAuthReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("user logged in");
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("authcontext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
