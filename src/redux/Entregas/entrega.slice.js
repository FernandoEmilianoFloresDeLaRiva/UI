import { createSlice } from "@reduxjs/toolkit";
import { patchEntregaAsync } from "./thunks/patchEntrega.async";
import {
  patchEntregaReducerFullfiled,
  patchEntregaReducerRejected,
} from "./reducers/postEntrega.reducer";
import { getEntregasAsync } from "./thunks/getEntregas.async";
import {
  getEntregasReducerFullfiled,
  getEntregasReducerRejected,
} from "./reducers/getEntregas.reducer";
export const entregaSlice = createSlice({
  name: "entrega",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    //crear entrega
    builder.addCase(patchEntregaAsync.fulfilled, patchEntregaReducerFullfiled);
    builder.addCase(patchEntregaAsync.rejected, patchEntregaReducerRejected);
    builder.addCase(getEntregasAsync.fulfilled, getEntregasReducerFullfiled);
    builder.addCase(getEntregasAsync.rejected, getEntregasReducerRejected);
  },
});

export default entregaSlice.reducer;
