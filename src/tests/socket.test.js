import { io } from "socket.io-client";

const sockethost = "http://localhost:5000";
const socketclient = io.connect(sockethost);
socketclient.on("connect", () => {
  console.log("Conectado al servidor ");
  socketclient.emit("nueva entrega", {
    message: "un nuevo producto se ha ordenado",
  });
});
