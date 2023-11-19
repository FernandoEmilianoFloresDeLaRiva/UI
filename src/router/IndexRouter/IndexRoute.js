import React, { Suspense } from "react";
import "./IndexRoute.css";
import { Route } from "wouter";
import Login from "../../pages/Login/Login.jsx";
import ClientService from "../../pages/ClientService/ClientService";
import Calendar from "../../pages/Calendar/Calendar";
import ProductInfo from "../../pages/ProductInfo/ProductInfo";
import NavHeader from "../../components/NavHeader/NavHeader.jsx";
import Home from "../../pages/Home/Home.jsx";
import IndexCatalogo from "../../pages/IndexCatalogo/IndexCatalogo.jsx";
import OrderProduct from "../../pages/OrderProduct/OrderProduct.jsx";
import Bell from "../../components/BellNotification/Bell.jsx";
import PrivateRoute from "../PrivateRoute.js";

function IndexRoute() {
  const auth = true;
  return (
    <div className="App">
      {auth && (
        <>
          <NavHeader />
          <Bell />
        </>
      )}
      <Route component={Login} path="/" />
      <PrivateRoute pathName={"/home"} auth={auth}>
        <Home />
      </PrivateRoute>
      <PrivateRoute pathName={"/catalogo"} auth={auth}>
        <IndexCatalogo />
      </PrivateRoute>
      <PrivateRoute pathName={"/contacto"} auth={auth}>
        <ClientService />
      </PrivateRoute>
      <PrivateRoute pathName={"/calendario"} auth={auth}>
        <Calendar />
      </PrivateRoute>
      <PrivateRoute pathName={"/pedidos"} auth={auth}>
        <ProductInfo />
      </PrivateRoute>
      <PrivateRoute pathName="/personalizado" auth={auth}>
        <OrderProduct personalized={true} />
      </PrivateRoute>
      <PrivateRoute pathName="/producto" auth={auth}>
        <OrderProduct
          personalized={false}
          nameProduct={"Psyduck"}
          // productImages={testingImages}
        />
      </PrivateRoute>
    </div>
  );
}

export default IndexRoute;
