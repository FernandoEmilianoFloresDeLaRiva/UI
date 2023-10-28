import React from "react";
import styles from "./ArticleCatalogo.module.css";
import imgDefault from "../../assets/img.svg";

function ArticleCatalogo({ nombreProducto, precioProducto, combo }) {
  return (
    <article className={styles.article}>
      <figure>
        <img src={imgDefault} />
        <figcaption>{nombreProducto}</figcaption>
        {combo && <p>4 girasoles chicos y 3 tulipanes</p>}
      </figure>
      <p>${precioProducto}</p>
    </article>
  );
}

export default ArticleCatalogo;
