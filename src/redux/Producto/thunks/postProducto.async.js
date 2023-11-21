import { createAsyncThunk } from "@reduxjs/toolkit";
import { postProducto } from "../../../services/services/productos/postProducto";
import { productoActions } from "../actions/producto.actions";

export const postProductoAsync = createAsyncThunk(
  //se crea producto, pedido y entrega
  productoActions.postProducto,
  async (payload) => {
    try {
      const { token, data } = payload;
      const res = await postProducto(data, token);
      if (res === 401) {
        window.alert(
          "Su sesión de usuario ha expirado, por favor inicie sesión otra vez"
        );
        window.localStorage.removeItem("userLog");
        window.location.href("/");
        return res;
      }
      return res;
    } catch (err) {
      console.error(`Error creando entrega ` + err);
      throw err;
    }
  }
);
