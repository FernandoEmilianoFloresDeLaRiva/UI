import { createAsyncThunk } from "@reduxjs/toolkit";
import { productoActions } from "../actions/producto.actions";
import { getProducto } from "../../../services/services/productos/getProducto";
import { getColorProduct } from "../../../services/services/colors/getColorsProducto";

export const setProductoAsync = createAsyncThunk(
  productoActions.setProducto,
  async (payload) => {
    try {
      const { id, token } = payload;
      const res = await getProducto(id);
      const color = await getColorProduct(id, token);
      const { data } = res;
      const producto = {
        ...data,
        ...color,
      };
      return producto;
    } catch (err) {
      console.error("error guardando el producto");
      throw err;
    }
  }
);
