import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext.js";
import PrivateRoute from "../PrivateRoute.js";
import Home from "../../pages/Home/Home.jsx";
import IndexCatalogo from "../../pages/IndexCatalogo/IndexCatalogo.jsx";
import OrderProduct from "../../pages/OrderProduct/OrderProduct.jsx";
import ClientService from "../../pages/ClientService/ClientService";
import Calendar from "../../pages/Calendar/Calendar";
import ProductInfo from "../../pages/ProductInfo/ProductInfo";

import NavHeader from "../../components/NavHeader/NavHeader.jsx";

import Bell from "../../components/BellNotification/Bell.jsx";
function PrivateRoutes() {
  const { objectAuth } = useContext(AuthContext);
  return (
    <>
      <NavHeader />
      <Bell />
      <PrivateRoute pathName={"/home"} auth={objectAuth.isAuth}>
        <Home />
      </PrivateRoute>
      <PrivateRoute pathName={"/catalogo"} auth={objectAuth.isAuth}>
        <IndexCatalogo />
      </PrivateRoute>
      <PrivateRoute pathName={"/contacto"} auth={objectAuth.isAuth}>
        <ClientService />
      </PrivateRoute>
      <PrivateRoute pathName={"/calendario"} auth={objectAuth.isAuth}>
        <Calendar />
      </PrivateRoute>
      <PrivateRoute pathName={"/pedidos"} auth={objectAuth.isAuth}>
        <ProductInfo />
      </PrivateRoute>
      <PrivateRoute pathName="/personalizado" auth={objectAuth.isAuth}>
        <OrderProduct personalized={true} />
      </PrivateRoute>
      <PrivateRoute pathName="/producto" auth={objectAuth.isAuth}>
        <OrderProduct
          personalized={false}
          nameProduct={"Psyduck"}
          // productImages={testingImages}
        />
      </PrivateRoute>
    </>
  );
}

export default PrivateRoutes;
