import React, { Suspense } from "react";
import "./IndexRoute.css";
import { Route } from "wouter";
import Login from "../pages/Login/Login.jsx";
import ClientService from "../pages/ClientService/ClientService";
import Calendar from "../pages/Calendar/Calendar";
import ProductInfo from "../pages/ProductInfo/ProductInfo";
import NavHeader from "../components/NavHeader/NavHeader.jsx";
import Home from "../pages/Home/Home.jsx";
import IndexCatalogo from "../pages/IndexCatalogo/IndexCatalogo.jsx";
import OrderProduct from "../pages/OrderProduct/OrderProduct.jsx";
import Bell from "../components/BellNotification/Bell.jsx";

function IndexRoute() {
  return (
    <div className="App">
      <NavHeader />
      <Bell />
      <Route component={Login} path="/" />
      <Route component={Home} path="/home" />
      <Route component={IndexCatalogo} path="/catalogo" />
      <Route component={ClientService} path="/contacto" />
      <Route component={Calendar} path="/calendario" />
      <Route component={ProductInfo} path="/pedidos" />
      <Route path="/personalizado">
        <OrderProduct personalized={true} />
      </Route>
      <Route path="/producto">
        <OrderProduct
          personalized={false}
          nameProduct={"Psyduck"}
          // productImages={testingImages}
        />
      </Route>
    </div>
  );
}

export default IndexRoute;
