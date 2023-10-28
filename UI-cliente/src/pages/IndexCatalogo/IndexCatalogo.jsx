import React from "react";
import styles from "./IndexCatalogo.module.css";
import Container from "../../components/ContainerCatalogo/Container";

function IndexCatalogo() {
  const productos = [
    {
      nombre: "Tulipan",
      precio: 60,
      combo: false,
    },
    {
      nombre: "Girasol grande",
      precio: 80,
      combo: false,
    },
    {
      nombre: "Girasol pequeño",
      precio: 40,
      combo: false,
    },
    {
      nombre: "Tulipanes",
      precio: 350,
      combo: true,
    },
    {
      nombre: "Girasoles",
      precio: 350,
      combo: true,
    },
    {
      nombre: "Girasoles",
      precio: 350,
      combo: true,
    },
  ];
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>Catalogo</h1>
        <Container
          productos={productos.filter((producto) => producto.combo === false)}
          title={"Haz tu ramito"}
        />
        <Container
          productos={productos.filter((producto) => producto.combo === true)}
          title={"Combos"}
        />
      </main>
    </div>
  );
}

export default IndexCatalogo;
