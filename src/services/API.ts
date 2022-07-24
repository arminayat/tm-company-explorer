import { message } from 'antd';
import axios from 'axios';

export const BASE_URL = 'https://virtserver.swaggerhub.com';

export const API_URL = BASE_URL + '/techminers/talent/1.0.1/';

const API = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

API.defaults.headers.post['Content-Type'] = 'application/json';

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    message.error(
      error.response
        ? error.response.status + ' : ' + error.response.data.message
        : 'Connection error'
    );
    return Promise.reject(error);
  }
);

export default API;
