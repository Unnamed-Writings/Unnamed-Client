import axios from 'axios';

import refresh from './refresh';
// const baseUrl = import.meta.env.VITE_BASE_URL;
const devBaseUrl = import.meta.env.VITE_DEV_BASE_URL;

export const client = axios.create({
  baseURL: `${devBaseUrl}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});
const accessToken = localStorage.getItem('accessToken');
export const authClient = axios.create({
  baseURL: `${devBaseUrl}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',

    Authorization: `Bearer ${accessToken}`,
  },
  withCredentials: true,
});

authClient.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originReq = err.config;
    if (err.response && err.response.status === 401 && !originReq._retry) {
      if (err.response.data.status === 40102) {
        originReq._retry = true;
        try {
          const { data } = await refresh();
          const newToken = data.data.accessToken;
          authClient.defaults.headers['Authorization'] = `Bearer ${newToken}`;
          originReq.headers.Authorization = `Bearer ${newToken}`;
          localStorage.setItem('accessToken', newToken);
          return authClient.request(originReq);
        } catch (err) {
          console.error(err);
          localStorage.removeItem('accessToken');
          window.location.href = '/login';
        }
      }
      if (err.response.data.status === 40103) {
        localStorage.setItem('beforePathname', window.location.pathname);
        alert('로그인이 필요한 서비스입니다.');
        window.location.href = '/login';
      }
    }
    if (err.response && err.response.status >= 500 && err.response.status <= 599) {
      alert('요청을 제대로 수행할 수 없어요. 잠시 후에 다시 시도해주세요.');
      window.location.href = '/error';
    }
    return Promise.reject(err);
  },
);

client.interceptors.response.use(
  (config) => {
    return config;
  },

  (err) => {
    const originReq = err.config;
    if (err.response && err.response.status === 401 && !originReq._retry) {
      originReq._retry = true;
      if (err.response.data.status === 40103) {
        alert('로그인이 필요한 서비스입니다.');
        window.location.href = '/login';
      }
    }
    if (err.response && err.response.status >= 500 && err.response.status <= 599) {
      alert('요청을 제대로 수행할 수 없어요. 잠시 후에 다시 시도해주세요.');
      window.location.href = '/error';
    }
  },
);
