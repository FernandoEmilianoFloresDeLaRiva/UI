import React from "react";
import styles from "./Index.module.css";
import flower from "../../assets/flower.svg";
import ContainerCatalogo from "../../components/ContainerCatalogo/ContainerCatalogo";
import { Link } from "wouter";
import { useProductos } from "../../hooks/useProductos";

function IndexCatalogo() {
  const { productos, isLoading } = useProductos();

  return (
    <div className={styles.app}>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <main className={styles.main}>
          <h1>Catalogo</h1>
          <Link to="/crearProducto">
            <i className={styles.plus}>+</i>
          </Link>
          <ContainerCatalogo productos={productos} title={"Haz tu ramito"} />
          <img src={flower} className={styles.flower} />
        </main>
      )}
    </div>
  );
}

export default IndexCatalogo;
