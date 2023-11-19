import { createAsyncThunk } from "@reduxjs/toolkit";
import { authActions } from "../actions/auth.actions";
import { postUsuario } from "../../../services/services/auth/postUsuario";

export const postUserAsync = createAsyncThunk(
  authActions.postAuth,
  async (payload) => {
    try {
      const objeto = {
        ...payload,
        tipo: 2,
      };
      const res = await postUsuario(objeto);
      return res;
    } catch (err) {
      console.error(`Error creando usuario ` + err);
      throw err;
    }
  }
);
