export const postProductoReducerFullfiled = (state, action) => {
  //se guarda producto al darle click en uno del catalogo
  const {message} = action.payload
  window.alert(message);
  window.location.assign("/")
  return state;
};

export const postProductoReducerRejected = (state, action) => {
  window.alert("Error guardando producto");
  return state;
};
