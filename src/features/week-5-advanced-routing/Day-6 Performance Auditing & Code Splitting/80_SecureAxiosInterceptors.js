import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://systeminstance.io'
});

apiInstance.interceptors.request.use(
  (config) => {
    const bearerToken = localStorage.getItem('system-auth-token');
    if (bearerToken) {
      config.headers.Authorization = `Bearer ${bearerToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Session clearance intercepted.');
    }
    return Promise.reject(error);
  }
);

export default apiInstance;