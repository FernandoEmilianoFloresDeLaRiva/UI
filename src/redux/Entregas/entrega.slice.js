import { createSlice } from "@reduxjs/toolkit";
import { postEntregaAsync } from "./thunks/postEntrega.async";
import {
  postEntregaReducerFullfiled,
  postEntregaReducerRejected,
} from "./reducers/postEntrega.reducer";
import { getEntregasAsync } from "./thunks/getEntregas.async";
import { getEntregasReducerFullfiled, getEntregasReducerRejected } from "./reducers/getEntregas.reducer";
export const entregaSlice = createSlice({
  name: "entrega",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    //crear entrega
    builder.addCase(postEntregaAsync.fulfilled, postEntregaReducerFullfiled);
    builder.addCase(postEntregaAsync.rejected, postEntregaReducerRejected);
    builder.addCase(getEntregasAsync.fulfilled, getEntregasReducerFullfiled)
    builder.addCase(getEntregasAsync.rejected, getEntregasReducerRejected)
  },
});

export default entregaSlice.reducer;
