import axios from 'axios';
import { getToken } from './auth';
import { BASE_URL, TIME_OUT } from './config';
import { ElMessageBox, ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
  // send cookies when cross-domain requests
  // withCredentials: true
});

service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // JWT Authorization
    // modify it according to the actual situation
    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    console.log(res, '====> res');

    // do something after response done
    if (res.code !== 20000) {
      ElMessage({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      });

      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
