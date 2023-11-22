export const setProductoReducerFullfiled = (state, action) => {
  //se guarda producto al darle click en uno del catalogo
  return action.payload;
};

export const setProductoReducerRejected = (state, action) => {
  window.alert("Error guardando producto");
  return state;
};
