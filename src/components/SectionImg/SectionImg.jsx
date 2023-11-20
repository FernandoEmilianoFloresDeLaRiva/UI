import React from "react";
import styles from "./SectionImg.module.css";
import ImgPreview from "../ImgPreview/ImgPreview";
import { lazy } from "react";

export default function SectionImg({ productos = [] }) {

  return (
    <section className={styles.container}>
      {productos.length === 0 || !productos ? (
        <p>Por el momento no hay productos</p>
      ) : (
        Array.isArray(productos) && productos.slice(0, 3).map(({id_producto}, index) => {
          return (
            <ImgPreview key={index} id={id_producto}/>
          );
        })
      )}
    </section>
  );
}

export const SectionImgLazy = lazy(() => import("./SectionImg"));
