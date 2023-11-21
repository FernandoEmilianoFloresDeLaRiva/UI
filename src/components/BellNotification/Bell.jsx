import React, { useEffect, useState } from "react";
import styles from "./Bell.module.css";
import { socket } from "../../utilities/inicializarSocket";

function Bell() {
  const [bandera, setBandera] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    socket.on("entrega recibida", (data) => {
      setBandera(true);
      setMessage(data.message);
      setTimeout(() => {
        setBandera(false);
      }, 3000);
    });
  });
  return (
    <>
      {bandera && (
        <div className={styles.notifications}>
          <p>¡{message}</p>
        </div>
      )}
    </>
  );
}

export default Bell;
