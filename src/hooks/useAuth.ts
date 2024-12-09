import { useState } from "react";
import { useRealm } from "@realm/react";
import { useDispatch } from "react-redux";
import { login, setError } from "../redux/authSlice";
import { findUser } from "../realm/queries/userQueries";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setErrorState] = useState<string | null>(null);
  const realm = useRealm();
  const dispatch = useDispatch();

  const handleLogin = (username: string, password: string) => {
    setIsLoading(true);
    setErrorState(null);

    try {
      const user = findUser(realm, username, password);

      if (user) {
        dispatch(login({ username }));
      } else {
        dispatch(setError("Invalid username or password"));
      }
    } catch (err) {
      dispatch(setError("An error occurred during login."));
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading, error };
};

export default useAuth;
