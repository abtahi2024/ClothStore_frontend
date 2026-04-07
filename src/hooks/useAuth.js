import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };
  const [authTokens, setAuthTokens] = useState(getToken());

  // Fetch user Profile
  const fetchUserProfile = async () => {
    try {
      const response = await apiClient.get("/auth/users/me/", {
        headers: { Authorization: `Bearer ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("401 error:", error.response?.data);
    }
  };

  // all user fetch
  const fetchAllUsers = async () => {
    try {
      const response = await apiClient.get("/auth/users/", {
        headers: {
          Authorization: `Bearer ${authTokens?.access}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    if (authTokens?.access) fetchUserProfile();
  }, [authTokens]);

  // error message show the scrren
  const handleApiError = (
    error,
    defaultMessge = "Somethin went Wrong! Try Again",
  ) => {
    if (error.response && error.response.data) {
      const errorMessage = Object.values(error.response.data).flat().join("\n");
      setErrorMsg(errorMessage);
      return { success: false, message: errorMessage };
    }
    setErrorMsg(defaultMessge);
    return {
      success: false,
      message: defaultMessge,
    };
  };

  // update user Profile
  const updateUserProfil = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.patch("/auth/users/me/", data, {
        headers: {
          Authorization: `Bearer ${authTokens?.access}`,
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      return handleApiError(error);
    }
  };

  //login uses
  const loginUser = async (useData) => {
    setErrorMsg("");

    try {
      const response = await apiClient.post("/auth/jwt/create/", useData);

      const tokens = response.data;

      setAuthTokens(tokens);
      localStorage.setItem("authTokens", JSON.stringify(tokens));

      const userRes = await apiClient.get("/auth/users/me/", {
        headers: { Authorization: `Bearer ${tokens.access}` },
      });

      setUser(userRes.data);
      return { success: true, user: userRes.data };
    } catch (error) {
      setErrorMsg(error.response?.data?.detail);
      return { success: false };
    }
  };

  // Register User
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", userData);
      return {
        success: true,
        message:
          "Registration successfull.Check your email to activate your account.",
      };
    } catch (error) {
      return handleApiError(error, "Registration Failed! Try again");
    }
  };

  // logout
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("cartId");
  };

  // Password Change
  const changePassword = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/set_password/", data, {
        headers: {
          Authorization: `Bearer ${authTokens?.access}`,
        },
      });
    } catch (error) {
      return handleApiError(error);
    }
  };

  return {
    user,
    errorMsg,
    loginUser,
    registerUser,
    logoutUser,
    setAuthTokens,
    setUser,
    updateUserProfil,
    changePassword,
    fetchAllUsers,
  };
};

export default useAuth;
