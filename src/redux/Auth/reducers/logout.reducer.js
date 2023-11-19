import { BASE_STATE_AUTH } from "../../../constants/INITIAL_STATES/AUTH_INITAL";

export const logoutReducer = (state, action) => {
  window.localStorage.removeItem("userLog");
  return BASE_STATE_AUTH;
};
