import React from "react";
import styles from "./ContainerCatalogo.module.css";
import ArticleCatalogo from "../ArticleCatalogo/ArticleCatalogo";

function ContainerCatalogo({ productos, title }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.containerArticles}>
        {productos.map((producto) =>
          <ArticleCatalogo
          nombreProducto={producto.nombre}
          precioProducto={producto.precio}
        />
        )}
      </div>
    </div>
  );
}

export default ContainerCatalogo;