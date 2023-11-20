import React from "react";
import styles from "./ArticleCatalogo.module.css";
import { useGetImgs } from "../../hooks/useGetImgs";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProductoAsync } from "../../redux/Producto/thunks/setProducto.async";
import { useLocation } from "wouter";

function ArticleCatalogo({ nombreProducto, precioProducto, id }) {
  const imgRef = useRef();
  const { token } = useSelector((state) => state.auth);
  const { isLoading } = useGetImgs(token, id, imgRef);
  const dispatch = useDispatch();
  const [location, setLocation] = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      id,
      token,
    };
    dispatch(setProductoAsync(data));
    setLocation(`/producto`);
  };
  return (
    //al momento de dar click guardar el producto en el contexto
    <a className={styles.article} onClick={handleClick}>
      <figure>
        <img ref={imgRef} alt="imagen del producto" />
        <figcaption>{nombreProducto}</figcaption>
      </figure>
      <p>${precioProducto}</p>
    </a>
  );
}

export default ArticleCatalogo;
