import React from "react";
import styles from "./Container.module.css";
import ArticleCatalogo from "../ArticleCatalogo/ArticleCatalogo";

function Container({ productos, title }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.containerArticles}>
        {productos.map((producto) =>
          producto.combo ? (
            <ArticleCatalogo
              nombreProducto={producto.nombre}
              precioProducto={producto.precio}
              combo={producto.combo}
            />
          ) : (
            <ArticleCatalogo
              nombreProducto={producto.nombre}
              precioProducto={producto.precio}
              combo={producto.combo}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Container;
