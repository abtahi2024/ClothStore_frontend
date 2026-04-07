import axios from "axios";

const authApiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

authApiClient.interceptors.request.use(
  (config) => {
    const tokens = JSON.parse(localStorage.getItem("authTokens"));

    if (tokens?.access) {
      config.headers.Authorization = `Bearer ${tokens.access}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default authApiClient;
