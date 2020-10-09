import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-link" to="/customer">
              Customer
            </NavLink>
            <NavLink className="nav-link" to="/rentals">
              Rentels
            </NavLink>
            {!user && (
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </>
            )}
            {user && (
              <>
                <NavLink className="nav-link" to="/my-profil">
                  <span style={{ color: "blue" }}>{user.name}</span>
                </NavLink>
                <NavLink className="nav-link" to="/logOut">
                  <span style={{ color: "red" }}>logOut</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
