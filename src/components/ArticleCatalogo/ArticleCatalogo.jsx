import React from "react";
import styles from "./ArticleCatalogo.module.css";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import { useGetImgs } from "../../hooks/useGetImgs";
import { useSelector, useDispatch } from "react-redux";
import { setProductoAsync } from "../../redux/Producto/thunks/setProducto.async";
import { useRef } from "react";
import { deleteLogicoProducto } from "../../services/services/productos/deleteLogicoProducto";
import { useLocation } from "wouter";

function ArticleCatalogo({ nombreProducto, precioProducto, id }) {
  const [location, setLocation] = useLocation();
  const dispatch = useDispatch();
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
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      dispatch(setProductoAsync({ id, token }));
      setLocation("/modificar");
    } catch (err) {
      console.error("Error editando el producto ", err);
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
          {/* <img src={edit} onClick={handleEdit} /> */}

          <img src={trash} onClick={handleDelete} />
        </div>
      </div>
    </article>
  );
}

export default ArticleCatalogo;
