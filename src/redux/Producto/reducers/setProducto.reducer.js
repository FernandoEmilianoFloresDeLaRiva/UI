export const setProductoReducerFullfiled = (state, action) => {
  //se guarda producto al darle click en uno del catalogo
  console.log(action.payload)
  return action.payload;
};

export const setProductoReducerRejected = (state, action) => {
  window.alert("Error guardando producto");
  return state;
};
