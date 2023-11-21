import React from "react";
import styles from "./ContainerCatalogo.module.css";
import ArticleCatalogo from "../ArticleCatalogo/ArticleCatalogo";

function ContainerCatalogo({ productos, title }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.containerArticles}>
        {productos.map(({ id_producto, nombre_producto, precio }) => (
          <ArticleCatalogo
            key={id_producto}
            id={id_producto}
            nombreProducto={nombre_producto}
            precioProducto={precio}
          />
        ))}
      </div>
    </div>
  );
}

export default ContainerCatalogo;
