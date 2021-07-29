import axios from "axios";
import Toast from "toastr";
import { STORAGE_TOKEN } from "../store.js";
export const api_url = {
  BASE_URL: "http://localhost:3005",
};
export const connector = axios.create({
  baseURL: "http://localhost:3005",
  timeout: 5000,
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    return data;
  }),
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});

connector.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers.Authorization = ``;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

connector.interceptors.response.use(
  function (response) {
    if (response.status === 400) {
      console.log("wahala dey");
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);


