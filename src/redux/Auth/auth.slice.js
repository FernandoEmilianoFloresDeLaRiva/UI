import { createSlice } from "@reduxjs/toolkit";
import { AUTH_INITIAL } from "../../constants/INITIAL_STATES/AUTH_INITAL";
import {
  getAuthReducerFullFiled,
  getAuthReducerRejected,
} from "./reducers/getAuth.reducer";
import { logoutReducer } from "./reducers/logout.reducer";
import {
  postUserReducerFullfiled,
  postUserReducerReject,
} from "./reducers/postUser.reducer";
import { getAuthAsync } from "./thunks/getAuth.async";
import { postUserAsync } from "./thunks/postUser.async";

export const authSlice = createSlice({
  name: "auth",
  initialState: AUTH_INITIAL,
  reducers: {
    logout: logoutReducer,
  },
  extraReducers: (builder) => {
    //conseguir auth
    builder.addCase(getAuthAsync.fulfilled, getAuthReducerFullFiled);
    builder.addCase(getAuthAsync.rejected, getAuthReducerRejected);
    //post usuario
    builder.addCase(postUserAsync.fulfilled, postUserReducerFullfiled);
    builder.addCase(postUserAsync.rejected, postUserReducerReject);
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
