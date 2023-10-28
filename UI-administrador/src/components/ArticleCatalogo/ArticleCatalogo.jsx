import React from "react";
import styles from "./ArticleCatalogo.module.css";
import imgDefault from "../../assets/img.svg";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";

function ArticleCatalogo({ nombreProducto, precioProducto, combo }) {
  return (
    <article className={styles.article}>
      <figure>
        <img src={imgDefault} />
        <figcaption>{nombreProducto}</figcaption>
        {combo && <p>4 girasoles chicos y 3 tulipanes</p>}
      </figure>
      <div className={styles.contents}>
        <p>${precioProducto}</p>
        <div className={styles.icons}>
          <img src={edit} />
          <img src={trash} />
        </div>
      </div>
    </article>
  );
}

export default ArticleCatalogo;
