export const patchEntregaReducerFullfiled = (state, action) => {
  console.log(action.payload);
  window.location.href = "/";
  if (action.payload !== 401) window.alert("Entrega asignada");
  return state;
};

export const patchEntregaReducerRejected = (state, action) => {
  // window.location.href = "/";
  // window.alert(
  //   "Se ha tenido un error realizando su entrega, intentelo mas tarde..."
  // );
  console.error(action.payload)
  return state;
};
