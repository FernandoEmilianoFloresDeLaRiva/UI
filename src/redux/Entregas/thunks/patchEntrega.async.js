import { createAsyncThunk } from "@reduxjs/toolkit";
import { patchEntrega } from "../../../services/services/entregas/patchEntregas";
import { entregasActions } from "../actions/entregas.actions";

export const patchEntregaAsync = createAsyncThunk(
  //se crea producto, pedido y entrega
  entregasActions.postEntrega,
  async (payload) => {
    try {
      const { token } = payload;
      const { fecha } = payload;
      const { id } = payload;
      const newFecha = new Date(fecha);
      const fechaObjeto = {
        fecha: newFecha,
      };
      const res = await patchEntrega(fechaObjeto, token, id);
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
