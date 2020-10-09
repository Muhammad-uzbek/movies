import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import auth from "./services/loginServices";
import { ToastContainer } from "react-toastify";
import Customer from "./components/Customer";
import Movie from "./components/Movie";
import MoviesRouting from "./components/MoviesRouting";
import Nav from "./components/Nav";
import Rentals from "./components/Rentals";
import Login from "./components/form/Login";
import Register from "./components/form/Register";
import LogOut from "./components/LogOut";
import MyProfil from "./components/MyProfil";
import { ProtectedRout } from "./components/ProtectedRout";

export default class App extends Component {
  state = {};
  componentDidMount() {
    try {
      const user = auth.getCurrentUser();
      this.setState({ user });
    } catch (error) {}
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <ToastContainer />
        <Nav user={user} />
        <Switch>
          <ProtectedRout path={"/movie/:id"} component={Movie} />

          <Route
            path="/movies"
            render={(props) => <MoviesRouting {...props} user={user} />}
          />
          <Route path="/customer" component={Customer} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={Login} />
          <Route path="/my-profil" component={MyProfil} />
          <Route path="/logOut" component={LogOut} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to="/movies" />
        </Switch>
      </>
    );
  }
}
