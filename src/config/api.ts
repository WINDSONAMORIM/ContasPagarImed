import axios from "axios";

import { getBearerToken } from "./auth";


export const baseUrlAPI = axios.create({
  baseURL: process.env.SICAP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

baseUrlAPI.interceptors.request.use(
  (config) => {
    const token = getBearerToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },    
(error) => {
    return Promise.reject(error);
  }
);
