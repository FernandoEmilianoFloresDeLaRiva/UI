import { createAsyncThunk } from "@reduxjs/toolkit";
import { patchProducto } from "../../../services/services/productos/patchProducto";
import { productoActions } from "../actions/producto.actions";
import { postImg } from "../../../services/services/imgs/postImg";
import { deleteImg } from "../../../services/services/imgs/deleteImg";
import { deleteColors } from "../../../services/services/colors/deleteColors";
import { postColor } from "../../../services/services/colors/postColors";

export const patchProductoAsync = createAsyncThunk(
  //se crea producto, pedido y entrega
  productoActions.patchProducto,
  async (payload) => {
    try {
      const { token, data, id, coloresELiminar } = payload;
      const res = await patchProducto(data, token, id);
      const coloresFiltrados = coloresELiminar.map((color) => color.id_color);
      const colores = {
        colores: coloresFiltrados,
      };
      const resColorsDeleted = await deleteColors(id, token, colores);
      data.colores.map(({ id_color }) => {
        const resAddedColor = postColor({ id_producto: id, id_color }, token);
      });

      //falta agregar patch colores

      // const resDeleteImg = await deleteImg(id, token);
      //  if (resDeleteImg.message) {
      //   const resImg = await postImg(data.imagenes, id, token);
      //   console.log(resImg, "patchImagen");
      // } else {
      //   window.alert("Error sustituyendo la imagen del producto");
      //  }
      if (res === 401) {
        window.alert(
          "Su sesión de usuario ha expirado, por favor inicie sesión otra vez"
        );
        window.localStorage.removeItem("userLog");
        window.location.assign("/");
        return res;
      }
      return res;
    } catch (err) {
      console.error(`Error creando entrega ` + err);
      throw err;
    }
  }
);
