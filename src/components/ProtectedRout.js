import React from "react";
import auth from "../services/loginServices";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRout = ({ component: Component, path, ...args }) => {
  return (
    <Route
      {...args}
      path={path}
      render={(props) => {
        if (!auth.getJwt()) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname },
              }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};
