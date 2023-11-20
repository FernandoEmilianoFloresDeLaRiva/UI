export const postEntregaReducerFullfiled = (state, action) => {
  window.location.href = "/";
  if (action.payload !== 401)
    window.alert(
      "Pedido creado, espere a Shinycrochet para confirmar su entrega"
    );
  return state;
};

export const postEntregaReducerRejected = (state, action) => {
  // window.location.href = "/";
  window.alert(
    "Se ha tenido un error realizando su pedido, intentelo mas tarde..."
  );
  return state;
};
