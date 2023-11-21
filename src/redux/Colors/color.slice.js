import { createSlice } from "@reduxjs/toolkit";
import { getColorsAsync } from "./Thunks/getColors.async";
import {
  getColorsReducerFullfiled,
  getColorsReducerRejected,
} from "./reducers/getColors.reducer";

export const colorSlice = createSlice({
  name: "color",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getColorsAsync.fulfilled, getColorsReducerFullfiled);
    builder.addCase(getColorsAsync.rejected, getColorsReducerRejected);
  },
});

export default colorSlice.reducer;
