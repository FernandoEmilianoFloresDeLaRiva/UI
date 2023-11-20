export const postUserReducerFullfiled = (state, action) => {
  const value = action.payload;

  if (value && typeof value === "object" && typeof value.then === "function") {
    return state;
  }
  if (!value)
    return window.alert("El usuario a crear ya existe, intente con otro");
  window.alert(`${value.message} `);
  return state;
};

export const postUserReducerReject = (state, action) => {
  console.log(action);
  window.alert("Error creando el usuario");
  return state;
};
