import { useState } from "react";
import { useAuthContext } from "./useAuthContext.hook";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const baseURL = "https://podcast-app.onrender.com/";

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(baseURL + "/api/user/login", {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
