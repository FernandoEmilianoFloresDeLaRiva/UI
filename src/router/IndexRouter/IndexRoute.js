import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext.js";
import "./IndexRoute.css";
import { Route } from "wouter";
import Login from "../../pages/Login/Login.jsx";

import PrivateRoutes from "../PrivatesRoutes/PrivateRoutes.jsx";

function IndexRoute() {
  const { objectAuth } = useContext(AuthContext);
  return (
    <div className="App">
      <PrivateRoutes />
      {!objectAuth.isAuth && (
        <Route path="/">
          <Login />
        </Route>
      )}
    </div>
  );
}

export default IndexRoute;
