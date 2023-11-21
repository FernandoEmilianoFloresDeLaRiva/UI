import React from "react";
import styles from "./ArticleCatalogo.module.css";
import imgDefault from "../../assets/img.svg";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import { Link } from "wouter";
import { useGetImgs } from "../../hooks/useGetImgs";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { deleteLogicoProducto } from "../../services/services/productos/deleteLogicoProducto";

function ArticleCatalogo({ nombreProducto, precioProducto, id }) {
  const { token } = useSelector((state) => state.auth);
  const refImg = useRef(null);
  const { isLoading } = useGetImgs(token, id, refImg);
  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      const res = await deleteLogicoProducto(id, token);
      const { message } = res;
      window.alert(message);
      window.location.reload();
    } catch (err) {
      console.error("Error borrando el producto ", err);
      throw err;
    }
  };
  return (
    <article className={styles.article}>
      <figure>
        <img ref={refImg} />
        <figcaption>{nombreProducto}</figcaption>
      </figure>
      <div className={styles.contents}>
        <p>${precioProducto}</p>
        <div className={styles.icons}>
          <Link to="/modificar">
            <img src={edit} />
          </Link>
          <img src={trash} onClick={handleDelete} />
        </div>
      </div>
    </article>
  );
}

export default ArticleCatalogo;
