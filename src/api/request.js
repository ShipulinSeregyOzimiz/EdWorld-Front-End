import axios from "axios";
import { getApiConfig } from "../config/api.config";
import { useAuthUserStore } from "@/stores/authUser";

const apiConfig = getApiConfig();

const instance = axios.create({
  baseURL: apiConfig.apiUrl,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    const auth = useAuthUserStore();
    if (auth?.$state?.token) {
      config.headers["Authorization"] = `Bearer ${auth.$state.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    const customError = {
      status: response?.status || null,
      message: response?.data?.message,
    };

    return Promise.reject(customError);
  }
);

export default instance;
