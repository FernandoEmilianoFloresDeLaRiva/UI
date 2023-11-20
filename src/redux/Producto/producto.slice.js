import { createSlice } from "@reduxjs/toolkit";
import { setProductoReducer } from "./reducers/setProducto";

export const productoSlice = createSlice({
  name: "producto",
  initialState: {},
  reducers: {
    setProducto: setProductoReducer,
  }
});

export default productoSlice.reducer;
export const { setProducto } = productoSlice.actions;
