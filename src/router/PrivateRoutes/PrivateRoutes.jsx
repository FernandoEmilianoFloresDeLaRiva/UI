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
import { getEntregasAsync } from "../../redux/Entregas/thunks/getEntregas.async";

function PrivateRoutes() {
  const dispatch = useDispatch();
  const { isAuth, token } = useSelector((state) => state.auth);
  useEffect(() => {
    inicializarSocket();
    dispatch(getColorsAsync(token));
    dispatch(getEntregasAsync(token));
  }, []);
  return (
    <>
      {isAuth && (
        <>
          <NavHeader />
          {/* si da tiempo se agregara socket para que reciba notificacion el usuario cuando se acepte u rechaze su pedido */}
          {/* <Bell /> */}
        </>
      )}
      <PrivateRoute pathName={"/"} auth={isAuth}>
        <Home />
      </PrivateRoute>
      <PrivateRoute pathName={"/catalogo"} auth={isAuth}>
        <IndexCatalogo />
      </PrivateRoute>
      <PrivateRoute pathName={"/contacto"} auth={isAuth}>
        <ClientService />
      </PrivateRoute>
      <PrivateRoute pathName={"/calendario"} auth={isAuth}>
        <Calendar token={token} />
      </PrivateRoute>
      <PrivateRoute pathName={"/pedidos"} auth={isAuth}>
        <ProductInfo token={token} />
      </PrivateRoute>
      <PrivateRoute pathName="/personalizado" auth={isAuth}>
        <Personalizado />
      </PrivateRoute>
      <PrivateRoute pathName="/producto" auth={isAuth}>
        <OrderProduct token={token} />
      </PrivateRoute>
    </>
  );
}

export default PrivateRoutes;
