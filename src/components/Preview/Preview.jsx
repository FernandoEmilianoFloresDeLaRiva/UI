import React from "react";
import styles from "./Preview.module.css";
import ImgPreview from "../ImgPreview/ImgPreview";
import { lazy } from "react";

export default function Preview({ productos }) {
  return (
    <section className={styles.container}>
      {productos.length === 0 || !productos ? (
        <p>Por el momento no hay productos</p>
      ) : (
        Array.isArray(productos) &&
        productos.slice(0, 6).map(({ id_producto }) => {
          return <ImgPreview key={id_producto} id={id_producto} />;
        })
      )}
    </section>
  );
}

export const PreviewLazy = lazy(() => import("./Preview"));
