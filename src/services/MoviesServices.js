import http from "./htttpServices";
import { apiUrl } from "../config.json";

const endPoint = apiUrl + "/movies";
const movieUrl = (ip) => {
  return `${endPoint}/${ip}`;
};

export const getMovies = () => {
  return http.get(endPoint);
};

export const getMovie = (id) => {
  return http.get(movieUrl(id));
};

export const deleteMovie = (id) => {
  return http.delete(movieUrl(id));
};
export const saveMove = (movie) => {
  const id = movie._id;
  if (id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(id), body);
  }

  return http.post(endPoint, movie);
};
