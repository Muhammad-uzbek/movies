import http from "./htttpServices";
import { apiUrl } from "../config.json";

export const getGenres = () => {
  return http.get(apiUrl + "/genres");
};
