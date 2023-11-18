import React from "react";
import styles from "./ArticleCatalogo.module.css";
import imgDefault from "../../assets/img.svg";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import { Link } from "wouter";

function ArticleCatalogo({ nombreProducto, precioProducto}) {
  return (
    <article className={styles.article}>
      <figure>
        <img src={imgDefault} />
        <figcaption>{nombreProducto}</figcaption>
      </figure>
      <div className={styles.contents}>
        <p>${precioProducto}</p>
        <div className={styles.icons}>
          <Link to="/modificar/5">
          <img src={edit} />
          </Link>
          <img src={trash} />
        </div>
      </div>
    </article>
  );
}

export default ArticleCatalogo;
