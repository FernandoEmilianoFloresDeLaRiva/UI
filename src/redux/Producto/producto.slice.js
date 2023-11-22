import { createSlice } from "@reduxjs/toolkit";
import {
  setProductoReducerFullfiled,
  setProductoReducerRejected,
} from "./reducers/setProducto.reducer";
import { setProductoAsync } from "./thunks/setProducto.async";
import { postProductoAsync } from "./thunks/postProducto.async";
import {
  postProductoReducerFullfiled,
  postProductoReducerRejected,
} from "./reducers/postProducto.reducer";
import { patchProductoAsync } from "./thunks/patchProducto.async";
import {
  patchProductoReducerFullfiled,
  pacthProductoReducerRejected,
} from "./reducers/patchProducto.reducer";

export const productoSlice = createSlice({
  name: "producto",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(setProductoAsync.fulfilled, setProductoReducerFullfiled);
    builder.addCase(setProductoAsync.rejected, setProductoReducerRejected),
      builder.addCase(
        postProductoAsync.fulfilled,
        postProductoReducerFullfiled
      );
    builder.addCase(postProductoAsync.rejected, postProductoReducerRejected);
    builder.addCase(
      patchProductoAsync.fulfilled,
      patchProductoReducerFullfiled
    );
    builder.addCase(patchProductoAsync.rejected, pacthProductoReducerRejected);
  },
});

export default productoSlice.reducer;
export const { setProducto } = productoSlice.actions;
