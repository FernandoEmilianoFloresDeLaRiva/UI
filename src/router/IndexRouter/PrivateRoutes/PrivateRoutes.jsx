import React from "react";
import CreateProduct from "../../../pages/CreateProduct/CreateProduct.jsx";
import PrivateRoute from "../../PrivateRoute.jsx";
import IndexCatalogo from "../../../pages/IndexCatalogo/IndexCatalogo.jsx";
import Calendar from "../../../pages/Calendar/Calendar";
import ProductInfo from "../../../pages/ProductInfo/ProductInfo";
import NavHeader from "../../../components/NavHeader/NavHeader.jsx";
import Bell from "../../../components/BellNotification/Bell.jsx";
function PrivateRoutes({auth}) {
  return (
    <>
      {auth && (
        <>
          <NavHeader />
          <Bell />
        </>
      )}
      <PrivateRoute pathName={"/"} auth={auth}>
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
    </>
  );
}

export default PrivateRoutes;
