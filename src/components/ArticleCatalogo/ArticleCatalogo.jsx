import React from "react";
import styles from "./ArticleCatalogo.module.css";
import imgDefault from "../../assets/img.svg";
import { Link } from "wouter";

function ArticleCatalogo({ nombreProducto, precioProducto, combo }) {
  return (
    <Link to="/producto" className={styles.article}>
      <figure>
        <img src={imgDefault} />
        <figcaption>{nombreProducto}</figcaption>
        {combo && <p>4 girasoles chicos y 3 tulipanes</p>}
      </figure>
      <p>${precioProducto}</p>
    </Link>
  );
}

export default ArticleCatalogo;
