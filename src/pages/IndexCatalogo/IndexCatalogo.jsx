import React from "react";
import styles from "./IndexCatalogo.module.css";
import Container from "../../components/ContainerCatalogo/Container";

function IndexCatalogo() {
  const productos = [
    {
      nombre: "Tulipan",
      precio: 60,
    },
    {
      nombre: "Girasol grande",
      precio: 80,

    },
    {
      nombre: "Girasol pequeño",
      precio: 40,

    },
    {
      nombre: "Tulipanes",
      precio: 350,

    },
    {
      nombre: "Girasoles",
      precio: 350,

    },
    {
      nombre: "Girasoles",
      precio: 350,

    },
  ];
  
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>Catalogo</h1>
        <Container
          productos={productos}
          title={"Haz tu ramito"}
        />
       
      </main>
    </div>
  );
}

export default IndexCatalogo;
