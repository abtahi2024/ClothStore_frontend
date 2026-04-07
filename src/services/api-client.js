import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

apiClient.interceptors.request.use((config) => {
  const tokens = JSON.parse(localStorage.getItem("authTokens"));

  if (tokens?.access) {
    config.headers.Authorization = `Bearer ${tokens.access}`;
  }

  return config;
});

export default apiClient;
