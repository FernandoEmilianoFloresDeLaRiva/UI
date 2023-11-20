import React from "react";
import styles from "./IndexCatalogo.module.css";
import { ContainerLazy } from "../../components/ContainerCatalogo/Container";
import { useProductos } from "../../hooks/useProductos";
import { Suspense } from "react";

function IndexCatalogo() {
  const { productos, isLoading } = useProductos();
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>Catalogo</h1>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <Suspense fallback={"Cargando productos..."}>
            <ContainerLazy productos={productos} title={"Haz tu ramito"} />
          </Suspense>
        )}
      </main>
    </div>
  );
}

export default IndexCatalogo;
