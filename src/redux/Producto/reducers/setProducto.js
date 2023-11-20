
export const setProductoReducer = (state, action) => {
    //se guarda producto al darle click en uno del catalogo
    console.log(action.payload)
    return action.payload;
}