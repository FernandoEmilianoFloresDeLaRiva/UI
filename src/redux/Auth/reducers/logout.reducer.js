import { BASE_STATE_AUTH } from "../../../constants/INITIAL_STATES/AUTH_INITAL";
import { socket } from "../../../utilities/inicializarSocket";

export const logoutReducer = (state, action) => {
  window.localStorage.removeItem("userLog");
  socket.disconnect();
  return BASE_STATE_AUTH;
};
