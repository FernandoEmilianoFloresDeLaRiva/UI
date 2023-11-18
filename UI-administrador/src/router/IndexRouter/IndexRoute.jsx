import React, { Suspense } from "react";
import "./IndexRoute.css";
import { Route } from "wouter";
import Login from "../../pages/Login/Login.jsx";
import Calendar from "../../pages/Calendar/Calendar";
import ProductInfo from "../../pages/ProductInfo/ProductInfo";
import NavHeader from "../../components/NavHeader/NavHeader.jsx";
import IndexCatalogo from "../../pages/IndexCatalogo/IndexCatalogo.jsx";
import Bell from "../../components/BellNotification/Bell.jsx";
import CreateProduct from "../../pages/CreateProduct/CreateProduct.jsx";
import PrivateRoute from "../PrivateRoute.jsx";

function IndexRoute() {
  //Ejemplo de como funcionara con auth, despues se cambiara con lo de la api
  const auth = false;
  return (
    <div className="App">
      {auth && (
        <>
          <NavHeader />
          <Bell />
        </>
      )}
      <Route component={Login} path={"/"} />
      <PrivateRoute pathName={"/catalogo"} auth={auth}>
        <IndexCatalogo />
      </PrivateRoute>
      <PrivateRoute pathName={"/calendario"} auth={auth}>
        <Calendar />
      </PrivateRoute>
      <PrivateRoute pathName={"/pedidos"} auth={auth}>
        <ProductInfo />
      </PrivateRoute>
      <PrivateRoute pathName={"/crearProducto"} auth={auth}>
        <CreateProduct />
      </PrivateRoute>
      <PrivateRoute pathName={"/modificar/:id"} auth={auth}>
        <CreateProduct />
      </PrivateRoute>
    </div>
  );
}

export default IndexRoute;
