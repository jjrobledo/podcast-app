import { AuthContext } from "../context/UserAuth.context";
import { useContext } from "react";

export const usAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("Invalid context");
  }

  return context;
};
