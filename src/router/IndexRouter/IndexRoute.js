import React from "react";
import "./IndexRoute.css";
import { Route } from "wouter";
import Login from "../../pages/Login/Login.jsx";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes.jsx";
import { useSelector } from "react-redux";

function IndexRoute() {
  const objectAuth = useSelector((state) => state.auth)
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
