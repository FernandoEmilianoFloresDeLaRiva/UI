import { io } from "socket.io-client";

export function inicializarSocket() {
  const socket = io("http://localhost:5000");

  socket.on("connect", () => {
    console.log("Conectado al servidor ");
  });

  socket.on("disconnect", () => {
    console.log("Desconectado del servidor ");
  });
  return socket;
}
