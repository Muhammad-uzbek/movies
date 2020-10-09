import http from "./htttpServices";
import { apiUrl } from "../config.json";

const endPoint = apiUrl + "/users";

export const register = (user) => {
  return http.post(endPoint, user);
};
