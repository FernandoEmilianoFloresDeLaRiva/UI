import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_STATE_AUTH } from "../../../constants/INITIAL_STATES/AUTH_INITAL";
import { authActions } from "../actions/auth.actions";
import { getAuth } from "../../../services/services/auth/getAuth";

export const getAuthAsync = createAsyncThunk(
  authActions.getAuth,
  async (payload) => {
    try {
      const res = await getAuth(payload);

      if (res) {
        const { token, usuario } = res;
        const newState = await {
          isAuth: true,
          user: usuario,
          token,
        };
        return newState;
      }
      window.alert("Error validando credenciales");
      return BASE_STATE_AUTH;
    } catch (err) {
      console.error(`Error validando credenciales ` + err);
      throw err;
    }
  }
);
