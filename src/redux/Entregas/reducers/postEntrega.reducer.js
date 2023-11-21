export const patchEntregaReducerFullfiled = (state, action) => {
  window.location.href = "/";
  if (action.payload !== 401) window.alert("Entrega asignada");
  return state;
};

export const patchEntregaReducerRejected = (state, action) => {
  window.location.href = "/";
  window.alert(
    "Se ha tenido un error realizando su entrega, intentelo mas tarde..."
  );
  return state;
};
