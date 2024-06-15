import axios from 'axios';

const axiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const axiosRequestWithCredentialsConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
};

export const axiosCommonInstance = axios.create(axiosRequestConfig);
export const axiosWithCredentialInstance = axios.create(axiosRequestWithCredentialsConfig);

axiosWithCredentialInstance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('Authorization');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
