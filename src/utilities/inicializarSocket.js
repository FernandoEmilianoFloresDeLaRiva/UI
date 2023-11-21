import { io } from "socket.io-client";

export const socket = io("http://localhost:5000");
export function inicializarSocket() {

  socket.on("connect", () => {
    console.log("Conectado al servidor ");
  });

  socket.on("disconnect", () => {
    console.log("Desconectado del servidor ");
  });
}
