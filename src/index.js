import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

console.log("env  : ", process.env.API_UREL_DEVELOPMET);
console.log("env PRoduction : ", process.env.API_UREL_PRODUCT);
ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
