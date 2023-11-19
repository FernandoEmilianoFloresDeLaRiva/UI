import React from "react";
import styles from "./Bell.module.css";

function Bell() {
  return (
    <div className={styles.notifications}>
      <p>¡Juan ha ordenado un nuevo pedido!</p>
    </div>
  );
}

export default Bell;
