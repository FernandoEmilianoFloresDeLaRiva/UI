export const getColorsReducerFullfiled = (state, action) => {
  const fulfilledValue = action.payload;
  if (
    fulfilledValue &&
    typeof fulfilledValue === "object" &&
    typeof fulfilledValue.then === "function"
  ) {
    return state;
  }
  const { data } = fulfilledValue;
  return data;
};

export const getColorsReducerRejected = (state, action) => {
  console.error("Error consiguiendo los colores " + action.payload);
  return state;
};
