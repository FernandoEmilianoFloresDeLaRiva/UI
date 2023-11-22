export const patchProductoReducerFullfiled = (state, action) => {
  const { data } = action.payload;
  window.alert(data);
  window.location.assign("/");
  return state;
};

export const pacthProductoReducerRejected = (state, action) => {
  window.alert("Error actualizando producto");
  return state;
};
