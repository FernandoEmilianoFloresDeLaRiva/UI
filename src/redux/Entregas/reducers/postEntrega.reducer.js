export const patchEntregaReducerFullfiled = (state, action) => {
  if (action.payload === 400) {
    window.alert("Error asignando entregas");
  } else {
    window.alert("Entrega asignada");
  }
  window.location.reload();
  return state;
};

export const patchEntregaReducerRejected = (state, action) => {
  window.location.href = "/";
  window.alert(
    "Se ha tenido un error realizando su entrega, intentelo mas tarde..."
  );
  console.error(action.payload);
  return state;
};
