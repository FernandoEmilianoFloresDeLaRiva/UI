import React from "react";
import styles from "./Header.module.css";
function Header({ texts, setActual }) {
  return (
    <nav className={styles.navHeader}>
      <div className={styles.items}>
      {texts.map(({ text }, id) => (
          <a key={id} onClick={() => setActual(id)} className={text === "Shinycrochet" ? styles.title : ""}>
            {text}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Header;
