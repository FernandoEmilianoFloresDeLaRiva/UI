import React from "react";
import styles from "./ImgPreview.module.css";
import imgDefault from "../../assets/img.svg";

function ImgPreview() {
  return (
    <a className={styles.a}>
      <img src={imgDefault} />
    </a>
  );
}

export default ImgPreview;
