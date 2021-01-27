import axios from 'axios';

const service = axios.create(
  {
    timeout: 5000,
  },
);

service.interceptors.request.use((config) => {
  console.info('interceptors request config', config);
  return config;
}, (error) => {
  console.error('interceptors request error', error);
  return Promise.reject(error);
});

service.interceptors.response.use((response) => response, (error) => {
  console.error('interceptors response error', error);
  return Promise.reject(error);
});

export default service;
