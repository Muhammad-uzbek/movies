import Joi from "joi-browser";
import React from "react";
import Form from "./Form";
import auth from "../../services/loginServices";
import { toast } from "react-toastify";

export default class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { email, password } = this.state.data;
      await auth.login(email, password);

      toast.success(" SUCCESSFUL ");
      const { state } = this.props.location;

      window.location = state ? state.from : "/";
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
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}

          {this.renderBtn("send")}
        </form>
      </div>
    );
  }
}
