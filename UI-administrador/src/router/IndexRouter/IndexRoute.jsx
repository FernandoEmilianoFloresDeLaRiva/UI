import React, { Suspense } from "react";
import "./IndexRoute.css";
import { Route } from "wouter";
import Login from "../../pages/Login/Login.jsx";
import Calendar from "../../pages/Calendar/Calendar";
import ProductInfo from "../../pages/ProductInfo/ProductInfo";
import NavHeader from "../../components/NavHeader/NavHeader.jsx";
import IndexCatalogo from "../../pages/IndexCatalogo/IndexCatalogo.jsx";
import Bell from "../../components/BellNotification/Bell.jsx";

function IndexRoute() {
  return (
    <div className="App">
      <NavHeader />
      <Bell />
      <Route component={Login} path="/" />
      <Route component={IndexCatalogo} path="/catalogo" />
      <Route component={Calendar} path="/calendario" />
      <Route path="/pedidos">
        <ProductInfo admin={true} />
      </Route>
    </div>
  );
}

export default IndexRoute;
