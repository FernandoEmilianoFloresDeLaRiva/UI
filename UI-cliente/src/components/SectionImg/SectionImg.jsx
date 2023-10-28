import React from "react";
import styles from "./SectionImg.module.css";
import ImgPreview from "../ImgPreview/ImgPreview";


function SectionImg() {
  return (
    <section className={styles.container}>
      <ImgPreview/>
      <ImgPreview/>
      <ImgPreview/>
    </section>
  );
}

export default SectionImg;
