import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEntregas } from "../../../services/services/entregas/getEntregas";
import { entregasActions } from "../actions/entregas.actions";

export const getEntregasAsync = createAsyncThunk(
  entregasActions.getEntregas,
  async (payload) => {
    try {
      const res = await getEntregas(payload);
      const {data} = res;
      return data;
    } catch (err) {
      console.error("error consiguiendo las entregas ", err);
      throw err;
    }
  }
);
