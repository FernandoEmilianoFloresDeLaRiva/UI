import { createAsyncThunk } from "@reduxjs/toolkit";
import { postEntregas } from "../../../services/services/entregas/postEntregas";
import { entregasActions } from "../actions/entregas.actions";
import { socket } from "../../../utilities/inicializarSocket";

export const postEntregaAsync = createAsyncThunk(
  //se crea producto, pedido y entrega
  entregasActions.postEntrega,
  async (payload) => {
    try {
      const { token } = payload;
      const { data } = payload;
      const res = await postEntregas(data, token);
      if (res === 401) {
        window.alert(
          "Su sesión de usuario ha expirado, por favor inicie sesión otra vez"
        );
        window.localStorage.removeItem("userLog");
        window.location.reload();
        return res
      }
      socket.emit("nueva entrega", "Un cliente ha emitido una entrega")
      return res;
    } catch (err) {
      console.error(`Error creando entrega ` + err);
      throw err;
    }
  }
);
