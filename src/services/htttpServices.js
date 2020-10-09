import axios from "axios";
import { toast } from "react-toastify";
import loger from "./logerServices";

axios.interceptors.response.use(null, (ex) => {
  const expected =
    ex.response && ex.response.status >= 400 && ex.response.status < 500;
  if (!expected) {
    loger.log(ex);
    toast("Siz qandaydir xato qildiz");
  }

  return Promise.reject(ex);
});

const setJwt = (jwt) => {
  return (axios.defaults.headers.common["x-auth-token"] = jwt);
};

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  setJwt,
};
