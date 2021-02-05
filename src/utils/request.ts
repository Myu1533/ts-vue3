import axios from 'axios';
import { notification } from 'ant-design-vue';
// import router from '@/router';

const service = axios.create(
  {
    timeout: 5000,
  },
);

service.interceptors.request.use((config) => {
  console.info('interceptors request config:', config);
  return config;
}, (error) => {
  console.error('interceptors request error:', error);
  return Promise.reject(error);
});

service.interceptors.response.use((response) => response, (error) => {
  const errorMsg = error.message;
  const errorRes = error.response.data;
  const errorResDesc = errorRes.error_description || '服务异常';
  console.error('interceptors response errorMsg:', errorMsg);
  console.error('interceptors response errorRes:', errorRes);
  if (errorMsg) {
    notification.error({
      message: '异常',
      description: `${errorMsg}\n${errorResDesc}`,
    });
  }
  return Promise.reject(error);
});

export default service;
