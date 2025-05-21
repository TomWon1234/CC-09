import axios from "axios";

axios.defaults.withCredentials = true;
const BASE_URL = "http://localhost:5000";

/*export const WhoAmIRequest = () =>
  axios.get(`${BASE_URL}/whoami`).then(res => res.data).catch(() => null);

export const LoginRequest = (username, password) =>
  axios.post(`${BASE_URL}/login`, { username, password });

export const LogoutRequest = () =>
  axios.post(`${BASE_URL}/logout`);

export const RegisterRequest = (username, password) => {
    return axios.post(`${BASE_URL}/register`, { username, password }).then(res => res.data).catch(() => null)}*/
    
//
export const WhoAmIRequest = () =>
  new Promise((resolve) => {
    resolve({ data: { id: 1, username: "john_doe" } });
  }).catch(() => null);

export const LoginRequest = (username, password) =>
  new Promise((resolve) => {
    resolve({ data: { success: true } });
  });

export const LogoutRequest = () =>
  new Promise((resolve) => {
    resolve({ data: { success: true } });
  });

export const RegisterRequest = (username, password) =>
  new Promise((resolve) => {
    resolve({ data: { success: true } });
  });

