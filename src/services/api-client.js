import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cloth-store-backend-phi.vercel.app/api/v1/",
});

apiClient.interceptors.request.use((config) => {
  const tokens = JSON.parse(localStorage.getItem("authTokens"));

  if (tokens?.access) {
    config.headers.Authorization = `Bearer ${tokens.access}`;
  }

  return config;
});

export default apiClient;
