import { createAsyncThunk } from "@reduxjs/toolkit";
import { productoActions } from "../actions/producto.actions";
import { getProducto } from "../../../services/services/productos/getProducto";
import { getColorProduct } from "../../../services/services/colors/getColorsProducto";
import { getImgs } from "../../../services/services/imgs/getImgs";

export const setProductoAsync = createAsyncThunk(
  productoActions.setProducto,
  async (payload) => {
    try {
      const { id, token } = payload;
      const res = await getProducto(id);
      if (res === 401) window.location.href("/");
      const color = await getColorProduct(id, token);
      const { data: dataColores } = color;
      const imgs = await getImgs(id, token);
      const imgBlob = await imgs.blob();
      const newUrl_img = URL.createObjectURL(imgBlob);
      const { data } = res;
      const producto = {
        ...data,
        dataColores,
        img: newUrl_img,
      };
      return producto;
    } catch (err) {
      console.error("error guardando el producto " + err);
      throw err;
    }
  }
);
