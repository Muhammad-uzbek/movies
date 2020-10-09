import Joi from "joi-browser";
import React from "react";
import Form from "./Form";
import * as usersSevices from "../../services/UsersServices";
import auth from "../../services/loginServices";
import { toast } from "react-toastify";

export default class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("User Name"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const { headers } = await usersSevices.register(this.state.data);
      auth.loginWithToken(headers["x-auth-token"]);
      toast.success("This ACount SUCCESSFUL registered");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        console.log(errors);
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { handlerSubmit } = this;
    return (
      <div className="container p-4">
        <form onSubmit={handlerSubmit}>
          {this.renderInput("name", "Full Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email")}

          {this.renderBtn("registered")}
        </form>
      </div>
    );
  }
}
