import React from "react";
import styles from "./Description.module.css";
import flower from "../../assets/flower.svg";

function Description() {
  return (
    <section className={styles.container}>
      <div className={styles.information}>
        <h2 className={styles.title}>Shinycrochet</h2>
        <p>Somos una empresa dedicada a hacer tus sueños realidad</p>
      </div>
      <img src={flower} className={`${styles.flower} ${styles.left}`} />
      <img src={flower} className={`${styles.flower} ${styles.right}`} />
    </section>
  );
}

export default Description;
