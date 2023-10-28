import React from "react";
import styles from "./Preview.module.css";
import ImgPreview from "../ImgPreview/ImgPreview";

function Preview() {
  return (
    <section className={styles.container}>
      <ImgPreview/>
      <ImgPreview/>
      <ImgPreview/>
      <ImgPreview/>
      <ImgPreview/>
      <ImgPreview/>
    </section>
  );
}

export default Preview;
