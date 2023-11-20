import React from "react";
import styles from "./ImgPreview.module.css";
import ContainerImages from "../ContainerImages/ContainerImages";
import { useSelector } from "react-redux";
import { useLocation } from "wouter";
import { setProductoAsync } from "../../redux/Producto/thunks/setProducto.async";
import { useDispatch } from "react-redux";

function ImgPreview({ id }) {
  const { token } = useSelector((state) => state.auth);
  const [location, setLocation] = useLocation();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      id, token
    }
    dispatch(setProductoAsync(data));
    setLocation(`/producto`);
  };
  return (
    <a to="/" className={styles.a} onClick={handleClick}>
      <ContainerImages token={token} id={id} />
    </a>
  );
}

export default ImgPreview;
