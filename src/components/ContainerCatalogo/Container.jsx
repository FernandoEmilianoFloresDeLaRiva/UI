import React from "react";
import styles from "./Container.module.css";
import ArticleCatalogo from "../ArticleCatalogo/ArticleCatalogo";
import { lazy } from "react";

export default function Container({ productos, title }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.containerArticles}>
        {productos.map((producto) => (
          <ArticleCatalogo
            key={producto.id_producto}
            id={producto.id_producto}
            nombreProducto={producto.nombre_producto}
            precioProducto={producto.precio}
          />
        ))}
      </div>
    </div>
  );
}

export const ContainerLazy = lazy(() => import("./Container"));
