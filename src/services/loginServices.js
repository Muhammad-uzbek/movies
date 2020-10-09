import jwtDecoder from "jwt-decode";
import http from "./htttpServices";
import { apiUrl } from "../config.json";

const endPoint = apiUrl + "/auth";
const tokenKey = "token";
const login = async (email, password) => {
  const { data: jwt } = await http.post(endPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
};

const loginWithToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

const logOut = () => {
  localStorage.removeItem(tokenKey);
};

const getCurrentUser = () => {
  const token = localStorage.getItem(tokenKey);
  return jwtDecoder(token);
};

const getJwt = () => {
  return localStorage.getItem(tokenKey);
};

http.setJwt(getJwt());

export default {
  login,
  loginWithToken,
  logOut,
  getCurrentUser,
  getJwt,
};
