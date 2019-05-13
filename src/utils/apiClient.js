/* global config */
import axios from 'axios';

let RequireLoginAction;

const client = axios.create({
  baseURL: config.API_BASE,
  withCredentials: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  transformResponse: (data) => {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    if (!data.success) {
      if (data.error && data.error.code === 401 && RequireLoginAction) {
        RequireLoginAction();
      }
      throw new Error(data.error ? data.error.message : '');
    }
    return data.data;
  },
  validateStatus: (status) => status >= 200 && status <= 500,
});

client.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    if (error.code === 401 && RequireLoginAction) {
      RequireLoginAction();
    }
    return Promise.reject(error);
  },
);

export default client;

export function init(requireLoginAction) {
  RequireLoginAction = requireLoginAction;
}