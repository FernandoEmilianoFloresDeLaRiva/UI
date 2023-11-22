export const getEntregasReducerFullfiled = (state, action) => {
  const arr = action.payload;
  console.log(arr)
  const newArr = [];

  arr.forEach(({ fecha, id_entrega, horario }) => {
    const object = {
      day: new Date(fecha).getDate(),
      month: new Date(fecha).getMonth(),
      order: id_entrega,
      hour: horario,
    };
    newArr.push(object);
  });

  return newArr;
};

export const getEntregasReducerRejected = (state, action) => {
  console.error(action);
  return state;
};
