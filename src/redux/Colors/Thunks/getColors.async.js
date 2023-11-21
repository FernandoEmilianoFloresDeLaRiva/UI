import { createAsyncThunk } from "@reduxjs/toolkit";
import { colorActions } from "../actions/colors.actions";
import { getColors } from "../../../services/services/colors/getColors";

export const getColorsAsync = createAsyncThunk(
  colorActions.getColors,
  async (payload) => {
    try {
      const res = await getColors();
      return res;
    } catch (err) {
      console.error(`Error consiguiendo colores ` + err);
      throw err;
    }
  }
);
