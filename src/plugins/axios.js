import axios from "axios";
import { getCookie } from "@/composables/useCookies";
import storage from "@/composables/useStorage";

const instance = axios.create({
  isFile: false,
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
instance.interceptors.request.use(
  (config) => {
    console.log(config);
    const token = getCookie("token") || null;
    const locale = storage.get("locale") || import.meta.env.VITE_LOCALE;
    console.log("Token: ", token);
    console.log("Locale: ", locale);

    config.headers["Accept-language"] = locale;
    if (token) config.headers["Authorization"] = "Bearer " + token;
    if (config.isFile) config.headers["Content-Type"] = "multipart/form-data";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    switch (error.response?.status) {
      case 401: // Unauthorized
        console.log("Unauthorized");
        break;
      case 403: // Forbidden
        console.log("Not Have Permissions");
        break;
      case 422: // Unprocessable Content
        console.log("Validation Error");
        break;
      case 404: // Request Not Found
        console.log("No Data Found");
        break;
      case 500: // Server Error
        // window.location.replace("/server-error");
        break;
      default:
        console.log("Unhandled error", error.response?.status);
    }
    return Promise.reject(error);
  }
);

export default instance;
