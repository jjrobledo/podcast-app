import { useState } from "react";
import { useAuthContext } from "./useAuthContext.hook";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    console.log("------------> in signup")

    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log("------------> response")
    console.log(response)

    const json = await response.json();
    console.log("------------> json")
    console.log(json)

    if (!response.ok) {
      console.log("------------> bad response")
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      console.log("------------> response ok")
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
