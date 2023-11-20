import React from "react";
import styles from "./ArticleCatalogo.module.css";
import imgDefault from "../../assets/img.svg";
import { Link } from "wouter";

function ArticleCatalogo({ nombreProducto, precioProducto }) {
  return (
    //al momento de dar click guardar el producto en el contexto
    <Link to="/producto" className={styles.article}>
      <figure>
        <img src={imgDefault} />
        <figcaption>{nombreProducto}</figcaption>
      </figure>
      <p>${precioProducto}</p>
    </Link>
  );
}

export default ArticleCatalogo;
