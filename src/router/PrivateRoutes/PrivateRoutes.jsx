import React, { useEffect } from "react";
import PrivateRoute from "../PrivateRoute.js";
import Home from "../../pages/Home/Home.jsx";
import IndexCatalogo from "../../pages/IndexCatalogo/IndexCatalogo.jsx";
import OrderProduct from "../../pages/OrderProduct/OrderProduct.jsx";
import ClientService from "../../pages/ClientService/ClientService";
import Calendar from "../../pages/Calendar/Calendar";
import ProductInfo from "../../pages/ProductInfo/ProductInfo";
import NavHeader from "../../components/NavHeader/NavHeader.jsx";
import Bell from "../../components/BellNotification/Bell.jsx";
import { useDispatch, useSelector } from "react-redux";
import { inicializarSocket } from "../../utilities/inicializarSocket.js";
import Personalizado from "../../pages/ProductoPeronalizado/Personalizado.jsx";
import { getColorsAsync } from "../../redux/Colors/Thunks/getColors.async.js";

function PrivateRoutes() {
  const dispatch = useDispatch();
  const objectAuth = useSelector((state) => state.auth);
  useEffect(() => {
    const socket = inicializarSocket();
    dispatch(getColorsAsync());
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      {objectAuth.isAuth && (
        <>
          <NavHeader />
          <Bell />
        </>
      )}
      <PrivateRoute pathName={"/"} auth={objectAuth.isAuth}>
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
        <Personalizado />
      </PrivateRoute>
      <PrivateRoute pathName="/producto" auth={objectAuth.isAuth}>
        <OrderProduct />
      </PrivateRoute>
    </>
  );
}

export default PrivateRoutes;
