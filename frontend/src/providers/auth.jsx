import { useContext, createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const auth = () => {
    const googleBaseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const searchParams = new URLSearchParams();
    searchParams.append("response_type", "code");
    searchParams.append(
      "client_id",
      "423125049963-vnhlm59vvirdjsquu0efhqvq5u91orks.apps.googleusercontent.com"
    );
    searchParams.append("redirect_uri", "http://localhost:3000/callback");
    searchParams.append("scope", "openid");
    // searchParams.append("prompt", "select_account")

    const fullUrl = googleBaseUrl + "?" + searchParams.toString();
    window.open(fullUrl, "_self");
  };

  const login = async (code, provider) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/user/login`,
        {
          code: code,
          provider: provider,
        }
      );
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
      setToken(null);
      localStorage.removeItem("token");
    }
  };

  const logout = () => {
    setToken(null);
  };

  const contextValue = { token, auth, login, logout };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Add auth provider to root");
  return context;
};

export { AuthProvider, useAuth };
