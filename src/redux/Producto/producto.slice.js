import { createSlice } from "@reduxjs/toolkit";
import { setProductoReducerFullfiled, setProductoReducerRejected } from "./reducers/setProducto.reducer";
import { setProductoAsync } from "./thunks/setProducto.async";

export const productoSlice = createSlice({
  name: "producto",
  initialState: {},
  extraReducers : builder => {
    builder.addCase(setProductoAsync.fulfilled, setProductoReducerFullfiled)
    builder.addCase(setProductoAsync.rejected, setProductoReducerRejected)
  }
});

export default productoSlice.reducer;
export const { setProducto } = productoSlice.actions;
