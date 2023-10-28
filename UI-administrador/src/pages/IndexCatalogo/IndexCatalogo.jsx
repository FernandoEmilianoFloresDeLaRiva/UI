import React from "react";
import styles from "./Index.module.css";
import flower from '../../assets/flower.svg'
import ContainerCatalogo from "../../components/ContainerCatalogo/ContainerCatalogo";

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
        <i className={styles.plus}>+</i>
        <ContainerCatalogo
          productos={productos.filter((producto) => producto.combo === false)}
          title={"Haz tu ramito"}
        />
        <ContainerCatalogo
          productos={productos.filter((producto) => producto.combo === true)}
          title={"Combos"}
        />
        <img src={flower} className={styles.flower}/>
      </main>
    </div>
  );
}

export default IndexCatalogo;
