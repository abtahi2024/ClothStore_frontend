import axios from "axios";

const authApiClient = axios.create({
  baseURL: "https://cloth-store-backend-phi.vercel.app/api/v1/",
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
