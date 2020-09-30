import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Customer from "./components/Customer";
import Movie from "./components/Movie";
import MoviesRouting from "./components/MoviesRouting";
import Nav from "./components/Nav";
import Rentals from "./components/Rentals";
import Login from "./components/form/Login";
import Register from "./components/form/Register";

export default class App extends Component {
  render() {
    return (
      <>
        <ToastContainer />
        <Nav />
        <Switch>
          <Route path="/movie/:id" component={Movie} />
          <Route path="/movies" component={MoviesRouting} />
          <Route path="/customer" component={Customer} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
