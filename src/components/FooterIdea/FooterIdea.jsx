import React from "react";
import { Link } from "wouter";
import styles from "./FooterIdea.module.css";

function FooterIdea() {
  return (
    <footer className={styles.footer}>
      <h3>¿No encontrate lo que buscabas?</h3>
      <Link to="/personalizado" className={styles.botonIdea}>
        ¡Danos tu idea!
      </Link>
    </footer>
  );
}

export default FooterIdea;
