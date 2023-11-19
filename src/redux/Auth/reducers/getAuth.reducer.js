export const getAuthReducerFullFiled = (state, action) => {
  const fulfilledValue = action.payload;

  if (
    fulfilledValue &&
    typeof fulfilledValue === "object" &&
    typeof fulfilledValue.then === "function"
  ) {
    return state;
  }
  if (!fulfilledValue.isAuth) return state;
  window.localStorage.setItem("userLog", JSON.stringify(fulfilledValue));
  const { token, user } = fulfilledValue;
  return {
    isAuth: true,
    token,
    user,
  };
};

export const getAuthReducerRejected = (state, action) => {
  window.alert("Problema del servidor");
  return state;
};
