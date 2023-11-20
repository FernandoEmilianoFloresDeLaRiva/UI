import { createSlice } from "@reduxjs/toolkit";
import { postEntregaAsync } from "./thunks/postEntrega.async";
import {
  postEntregaReducerFullfiled,
  postEntregaReducerRejected,
} from "./reducers/postEntrega.reducer";
export const entregaSlice = createSlice({
  name: "entrega",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    //crear entrega
    builder.addCase(postEntregaAsync.fulfilled, postEntregaReducerFullfiled);
    builder.addCase(postEntregaAsync.rejected, postEntregaReducerRejected);
  },
});

export default entregaSlice.reducer;
