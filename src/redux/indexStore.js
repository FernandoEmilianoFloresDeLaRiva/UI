import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth/auth.slice'
import entregaSlice from './Entregas/entrega.slice'
import productoSlice from './Producto/producto.slice'
import colorSlice from "./Colors/color.slice";

export const store = configureStore({
  reducer: {
    //para el login y seguridad
    auth : authReducer,
    //contexto para ver los entregas 
    entrega : entregaSlice,
    //contexto para guardar producto
    producto : productoSlice,
    //Contexto para los colores
    colors : colorSlice
  },
});