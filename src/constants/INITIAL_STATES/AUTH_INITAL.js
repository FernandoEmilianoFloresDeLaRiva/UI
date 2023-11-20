export const BASE_STATE_AUTH = {
  isAuth: false,
  user: {},
  token: null,
};
export const AUTH_INITIAL =
  JSON.parse(window.localStorage.getItem("userLog")) || BASE_STATE_AUTH;
