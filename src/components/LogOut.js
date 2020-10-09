import { Component } from "react";
import auth from "../services/loginServices";

export default class LogOut extends Component {
  componentDidMount() {
    auth.logOut("token");
    window.location = "/";
  }
  render() {
    return null;
  }
}
