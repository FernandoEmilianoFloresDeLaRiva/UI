export const getEntregasReducerFullfiled = (state, action) => {
  const arr = action.payload;
  const newArr = [];
  console.log(arr);
  arr.forEach(({ fecha, id_entrega, horario }) => {
    const object = {
      day: new Date(fecha).getDate(),
      month: new Date(fecha).getMonth(),
      order: id_entrega,
      hour: horario,
    };
    newArr.push(object);
  });
  console.log(newArr);
  return newArr;
};

export const getEntregasReducerRejected = (state, action) => {
  console.error(action);
  return state;
};
