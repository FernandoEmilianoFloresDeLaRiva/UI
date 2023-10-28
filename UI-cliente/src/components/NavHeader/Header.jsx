import React from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <nav className={styles.navHeader}>
      <div className={styles.items}>
        <a href="">Servicio a clientes</a>
        <a href="">Catalogo</a>
        <a href="#" className={styles.title}>
          Shinycrochet
        </a>
        <a href="">Calendario</a>
        <a href="">INFORMACION DE ENTREGA</a>
      </div>
    </nav>
  );
}

export default Header;
